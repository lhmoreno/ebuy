import type { GetServerSideProps, NextPage } from 'next'
import type { Product } from '../@types/Product'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { Box, Checkbox, Container, Flex, Grid, Heading, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, SimpleGrid, Tag } from '@chakra-ui/react'

import { listFilteredProducts } from './api/products'
import { Header } from '../components/Header'
import { ProductStore } from '../components/ProductStore'
import { Rating } from '../components/Rating'
import { ParsedUrlQuery } from 'querystring'
import { CartStorage } from './cart'

interface SSR {
  products: Array<Product>
}

type Category = 'smartphone' | 'laptop'
type Rating = '1' | '2' | '3' | '4' | '5'

interface MyQuery extends ParsedUrlQuery {
  category?: Category | Category[]
  rating?: Rating | Rating[]
}

const Store: NextPage<SSR> = ({ products }) => {
  const router = useRouter()
  const query = router.query as MyQuery
  const [selectedCategories, setSelectedCategories] = useState<Array<Category>>([])
  const [selectedRating, setSelectedRating] = useState<Array<Rating>>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (query.category) {
      typeof(query.category) === 'string' ? setSelectedCategories([query.category]) : setSelectedCategories([...query.category])
    } else {
      setSelectedCategories([])
    }
    
    if (query.rating) {
      typeof(query.rating) === 'string' ? setSelectedRating([query.rating]) : setSelectedRating([...query.rating])
    } else {
      setSelectedRating([])
    }

    setIsLoading(false)
  }, [query])

  function handleAddCategory(category: Category) {
    if (isLoading) return
    setIsLoading(true)

    if (!query.category) return router.push({ query: { ...query, category } })
    if (typeof(query.category) === 'string') return router.push({ query: { ...query, category: [ query.category, category] } })
    return router.push({ query: { ...query, category: [...query.category, category] } })
  }

  function handleRemoveCategory(category: Category) {
    if (isLoading) return
    setIsLoading(true)

    if (typeof(query.category) === 'string') return router.push({ query: { ...query, category: undefined } })
    return router.push({ query: { ...query, ategory: query.category?.filter((cat) => cat !== category) } })
  }

  function handleAddRating(rating: Rating) {
    if (isLoading) return
    setIsLoading(true)

    if (!query.rating) return router.push({ query: { ...query, rating } })
    if (typeof(query.rating) === 'string') return router.push({ query: { ...query, rating: [ query.rating, rating] } })
    return router.push({ query: { ...query, rating: [...query.rating, rating] } })
  }

  function handleRemoveRating(rating: Rating) {
    if (isLoading) return
    setIsLoading(true)

    if (typeof(query.rating) === 'string') return router.push({ query: { ...query, rating: undefined } })
    return router.push({ query: { ...query, rating: query.rating?.filter((cat) => cat !== rating) } })
  }

  function onBuy(product_id: number) {
    const cartStorage = localStorage.getItem('cart')
    const cart = cartStorage ? JSON.parse(cartStorage) as CartStorage[] : []

    const product = cart.find(({ id }) => id === product_id)

    if (!product) {
      const newCart = JSON.stringify([...cart, { id: product_id, quanty: 1 }])
      localStorage.setItem('cart', newCart)
    } else {
      const newCart = JSON.stringify(cart.map((productCart) => {
        if (productCart.id === product_id) return { ...productCart, quanty: productCart.quanty + 1 }
        return productCart
      }))
      localStorage.setItem('cart', newCart)
    }

    router.push('cart')
  }

  return (
    <Fragment>
      <Head>
        <title>Ebuy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container maxW="container.xl" display="flex">
        <Box width="full" maxWidth="72" marginRight="8">
          <Tag paddingX="4" paddingY="2">{ products.length } produto(s) encontrado(s)</Tag>

          <Box mt="4">
            <Heading as="h2" fontSize="xl">Categorias</Heading>
            <Flex mt="1" flexDirection="column">
              <Checkbox 
                colorScheme="blackAlpha"
                onChange={(event) => event.target.checked ? handleAddCategory('smartphone') : handleRemoveCategory('smartphone')}
                isChecked={selectedCategories.includes('smartphone')}
              >
                Celular
              </Checkbox>
              <Checkbox 
                colorScheme="blackAlpha"
                onChange={(event) => event.target.checked ? handleAddCategory('laptop') : handleRemoveCategory('laptop')}
                isChecked={selectedCategories.includes('laptop')}
              >
                Notebook
              </Checkbox>
            </Flex>
          </Box>
          
          <Box mt="6">
            <Heading as="h2" fontSize="xl">Classificação</Heading>
            <Flex mt="1" flexDirection="column">
              <Checkbox 
                colorScheme="blackAlpha"
                onChange={(event) => event.target.checked ? handleAddRating('5') : handleRemoveRating('5')}
                isChecked={selectedRating.includes('5')}
              >
                <Rating stars={5} />
              </Checkbox>
              <Checkbox 
                colorScheme="blackAlpha"
                onChange={(event) => event.target.checked ? handleAddRating('4') : handleRemoveRating('4')}
                isChecked={selectedRating.includes('4')}
              >
                <Rating stars={4} />
              </Checkbox>
              <Checkbox 
                colorScheme="blackAlpha"
                onChange={(event) => event.target.checked ? handleAddRating('3') : handleRemoveRating('3')}
                isChecked={selectedRating.includes('3')}
              >
                <Rating stars={3} />
              </Checkbox>
              <Checkbox 
                colorScheme="blackAlpha"
                onChange={(event) => event.target.checked ? handleAddRating('2') : handleRemoveRating('2')}
                isChecked={selectedRating.includes('2')}
              >
                <Rating stars={2} />
              </Checkbox>
              <Checkbox 
                colorScheme="blackAlpha"
                onChange={(event) => event.target.checked ? handleAddRating('1') : handleRemoveRating('1')}
                isChecked={selectedRating.includes('1')}
              >
                <Rating stars={1} />
              </Checkbox>
            </Flex>
          </Box>
        </Box>

        { !isLoading ? (
            <SimpleGrid
              width="75%"
              justifyItems="center"
              minChildWidth="256px"
              spacing="8"
            >
              { products.map(({ id, image_url, title, price, rating }) => (
                  <ProductStore 
                    key={id}
                    id={id}
                    image_url={image_url}
                    title={title}
                    price={price}
                    rating={rating}
                    buy={onBuy}
                  />
                ))
              }
            </SimpleGrid>
          ) : (
            <Flex
              width="full"
              justifyContent="center"
              alignItems="center"
            >
              Carregando...
            </Flex>
          )
        }
      </Container>
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let categories: string[] | undefined = undefined
  let ratings: string[] | undefined = undefined

  if (query.category) categories = typeof(query.category) === 'string' ? [query.category] : query.category
  if (query.rating) ratings = typeof(query.rating) === 'string' ? [query.rating] : query.rating

  const products = await listFilteredProducts({ categories, ratings })

  return {
    props: {
      products: products ? products : []
    }
  }
}

export default Store
