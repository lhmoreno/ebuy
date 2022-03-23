import type { NextPage } from 'next'

import Head from 'next/head'
import { Fragment } from 'react'
import { Box, Button, Container, Divider, Flex, Heading, Table, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { ProductCart } from '../components/ProductCart'
import { fakeProducts } from './api/products'

const Cart: NextPage = () => {
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
            { fakeProducts.map(({ id, image, name, price }) => (
              <ProductCart 
                key={id}
                image={image}
                name={name}
                price={price}
              />
            )) }
          </Tbody>
        </Table>
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
            <Text fontWeight="bold">R$12.345,90</Text>
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
      </Container>
    </Fragment>
  )
}

export default Cart
