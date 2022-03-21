import { Button, Flex, Heading, Image, Td, Text, Tr } from '@chakra-ui/react'
import { useState } from 'react'

import { formatPriceInReal } from '../utils/price'

export interface ProductCartProps {
  image: string
  name: string
  price: number
}

const ProductCart = ({ image, name, price }: ProductCartProps) => {
  const [amount, setAmount] = useState(1)

  return (
    <Tr>
      <Td>
        <Flex alignItems="center" gap="6">
          <Image 
            src={image} alt="Carro"
            borderRadius="md"
            maxHeight="24"
          />
          <Heading
            as="h3"
            marginTop="2"
            fontWeight="bold"
            fontSize="md"
          >{ name }</Heading>
        </Flex>
      </Td>

      <Td>
        <Flex alignItems="center">
          <Button type="button" fontSize="lg" color="blackAlpha.700" onClick={() => amount !== 1 && setAmount(s => --s)}>
            -
          </Button>
          <Text width="12" textAlign="center">
            { amount }
          </Text>
          <Button type="button" color="blackAlpha.700" onClick={() => setAmount(s => ++s)}>
            +
          </Button>
        </Flex>
      </Td>

      <Td isNumeric>
        <Text marginTop="1">
          { formatPriceInReal(price) }
        </Text>
      </Td>
    </Tr>
  )
}

export { ProductCart }