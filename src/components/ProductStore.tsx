import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'

import { Rating } from './Rating'
import { formatPriceInReal } from '../utils/price'

interface ProductStoreProps {
  id: number
  title: string
  price: number
  image_url: string
  rating: number
  buy?: (product_id: number) => void
}

const ProductStore = ({ id, image_url, title, price, rating, buy }: ProductStoreProps) => {
  return (
    <Box 
      height="96"
      width="64"
      padding="4"
      borderWidth="1px" 
      borderRadius="lg"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Image 
        src={image_url} alt={title}
        height="24"
        objectFit="contain"
        borderRadius="md"
      />

      <Box>
        <Rating stars={rating} />
        <Heading
          as="h3"
          marginTop="2"
          fontWeight="bold"
          fontSize="md"
        >{ title }</Heading>
        <Text marginTop="1">
          { formatPriceInReal(price) }
        </Text>
      </Box>

      <Button 
        colorScheme="blackAlpha"
        onClick={() => buy && buy(id)}
      >
        COMPRAR
      </Button>
    </Box>
  )
}

export { ProductStore }