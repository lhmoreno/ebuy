import { Button, Flex, Heading, Image, Td, Text, Tr } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { formatPriceInReal } from '../utils/price'

export interface ProductCartProps {
  image: string
  name: string
  price: number
  onChangePrice?: (type: 'add' | 'sub', price: number) => void
}

let isAdd = true

const ProductCart = ({ image, name, price: basePrice, onChangePrice }: ProductCartProps) => {
  const [amount, setAmount] = useState(1)
  const [price, setPrice] = useState(basePrice)

  useEffect(() => {
    if (onChangePrice) {
      const type = isAdd ? 'add' : 'sub'

      onChangePrice(type, basePrice)
    }
  }, [price])

  function add() {
    setAmount(s => ++s)
    setPrice(s => s + basePrice)
    isAdd = true
  }

  function subtract() {
    if (amount !== 1) {
      setAmount(s => --s)
      setPrice(s => s - basePrice)
      isAdd = false
    }
  }

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
          <Button type="button" fontSize="lg" color="blackAlpha.700" onClick={subtract}>
            -
          </Button>
          <Text width="12" textAlign="center">
            { amount }
          </Text>
          <Button type="button" color="blackAlpha.700" onClick={add}>
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