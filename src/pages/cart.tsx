import type { NextPage } from 'next'

import Head from 'next/head'
import { ChangeEventHandler, Fragment, useEffect, useState } from 'react'
import { Box, Button, Container, Divider, Flex, Heading, Input, Table, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { ProductCart } from '../components/ProductCart'
import { formatPriceInReal } from '../utils/price'
import { Product } from '../@types/Product'
import { listFilteredProducts } from '../utils/products'

export interface CartStorage {
  id: number
  quanty: number
}

interface ProductCart extends Product {
  quanty: number
}

const Cart: NextPage = () => {
  const [cep, setCep] = useState('')
  const [productsCart, setProductsCart] = useState<Array<ProductCart>>([])
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    const cartStorage = localStorage.getItem('cart')
    const cart = cartStorage ? JSON.parse(cartStorage) as CartStorage[] : []
    
    if (cart) {
      (async () => {
        const ids = cart.map(({ id }) => id)
        const productsStore = await listFilteredProducts({ id: ids })
        
        const products: ProductCart[] = productsStore.map((product, index) => ({ ...product, quanty: cart[index].quanty }))
        setProductsCart(products)
      })()
    }
  }, [])

  const onChangeCep: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value.length <= 8 ) setCep(event.target.value)
  }

  return (
    <Fragment>
      <Head>
        <title>Ebuy | Carrinho</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container maxW="container.xl" display="grid" gridTemplateColumns="3fr 1fr" gap="8">
        <Table flexDirection="column">
          <Thead>
            <Tr>
              <Th>Produto</Th>
              <Th>Quantidade</Th>
              <Th isNumeric>Valor</Th>
            </Tr>
          </Thead>

          <Tbody>
            { productsCart.map(({ id, image_url, title, price, quanty }) => (
              <ProductCart 
                key={id}
                quanty={quanty}
                image_url={image_url}
                title={title}
                price={price}
                onChangePrice={(type, number) => type === 'add' ? setSubtotal(v => v + number) : setSubtotal(v => v - number)}
              />
            )) }
          </Tbody>
        </Table>
        <Flex flexDirection="column" gap="8">
          <Box 
            backgroundColor="blackAlpha.100" 
            py="6"
            px="8"
            borderRadius="lg"
            height="max-content"
          >
            <Heading
              as="h2"
              fontSize="2xl"
              fontWeight="regular"
              color="blackAlpha.600"
            >
              Calcular frete
            </Heading>
            <Flex mt="8" alignItems="center">
              <Text>CEP:</Text>
              <Input 
                type="number"
                value={cep}
                onChange={onChangeCep}
                maxLength={8}
                placeholder="00000000"
                mx="1"
                backgroundColor="white"
              />
              <Button variant="outline" colorScheme="blackAlpha">
                OK
              </Button>
            </Flex>
            <Flex mt="4" justifyContent="space-between">
              <Text>Cidade:</Text>
              <Text fontWeight="bold">Itararé/SP</Text>
            </Flex>
            <Flex mt="4" justifyContent="space-between">
              <Text>Valor:</Text>
              <Text fontWeight="bold">R$30,20</Text>
            </Flex>
          </Box>
          <Box 
            backgroundColor="blackAlpha.100" 
            pt="6"
            px="8"
            borderRadius="lg"
            height="max-content"
          >
            <Heading
              as="h2"
              fontSize="2xl"
              fontWeight="regular"
              color="blackAlpha.600"
            >
              Resumo
            </Heading>
            <Flex mt="8" justifyContent="space-between">
              <Text>Sub-total:</Text>
              <Text fontWeight="bold">{ formatPriceInReal(subtotal) }</Text>
            </Flex>
            <Flex mt="4" justifyContent="space-between">
              <Text>Frete:</Text>
              <Text fontWeight="bold">R$30,20</Text>
            </Flex>
            <Divider my="4" borderColor="white"  borderWidth={4} variant="dashed" />
            <Flex justifyContent="space-between">
              <Text fontSize="lg">Total:</Text>
              <Text fontSize="lg" fontWeight="bold">R$12.376,10</Text>
            </Flex>

            <Button my="6" width="full" variant="outline" colorScheme="blackAlpha">
              Faker checkout
            </Button>
          </Box>
        </Flex>
      </Container>
    </Fragment>
  )
}

export default Cart
