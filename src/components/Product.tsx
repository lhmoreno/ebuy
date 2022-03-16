import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'

export interface ProductProps {
  image: string
  name: string
  price: number
}

function formatPriceInReal(price: number) {
  let real = String(price.toFixed(2)).replace('.', ',')
  if (price >= 1000) {
    real = real.slice(0, 1) + '.' + real.slice(1)
  }

  return `R$ ${real}`
}

const Product = ({ image, name, price }: ProductProps) => {
  return (
    <Box
      width="280px"
      borderWidth="1px"
      borderRadius="lg"
    >
      <Image 
        src={image} alt="Carro"
        borderTopRadius="lg"
      />
      <Box
        paddingY="2"
        paddingX="4"
      >
        <Text
          fontWeight="bold"
          maxW="full"
          isTruncated
        >
          { name }
        </Text>
        <Text>
          { formatPriceInReal(price) }
        </Text>
      </Box>
      <Flex
        paddingBottom="2"
        justifyContent="space-evenly"
      >
        <Button
          size="sm"
        >
          COMPRAR
        </Button>
        <Button
          size="sm"
        >
          GOSTEI
        </Button>
      </Flex>
    </Box>
  )
}

export { Product }