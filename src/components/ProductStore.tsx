import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'

import { formatPriceInReal } from '../utils/price'

export interface ProductStoreProps {
  image: string
  name: string
  price: number
}

const ProductStore = ({ image, name, price }: ProductStoreProps) => {
  return (
    <Box 
      height="96"
      padding="4"
      borderWidth="1px" 
      borderRadius="lg"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Image 
        src={image} alt="Carro"
        borderRadius="md"
      />

      <Box>
        <Box>
          <StarIcon w={3} h={3} mr={1} />
          <StarIcon w={3} h={3} mr={1} />
          <StarIcon w={3} h={3} mr={1} />
          <StarIcon w={3} h={3} mr={1} />
          <StarIcon w={3} h={3} />
        </Box>
        <Heading
          as="h3"
          marginTop="2"
          fontWeight="bold"
          fontSize="md"
        >{ name }</Heading>
        <Text marginTop="1">
          { formatPriceInReal(price) }
        </Text>
      </Box>

      <Button colorScheme="blackAlpha">COMPRAR</Button>
    </Box>
  )
}

export { ProductStore }