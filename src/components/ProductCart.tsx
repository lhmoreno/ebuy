import type { ProductCartProps } from '../contexts/CartContext'

import { DeleteIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading, Image, Input, Td, Text, Tr } from '@chakra-ui/react'

import { useCart } from '../hooks/useCart'
import { formatPriceInReal } from '../utils/price'

const ProductCart = ({ id, title, image_url, price, quanty }: ProductCartProps) => {
  const { onChangeProductQuanty, deleteProduct } = useCart()

  return (
    <Tr>
      <Td>
        <Flex alignItems="center" gap="6">
          <Button onClick={() => deleteProduct(id)}>
            <DeleteIcon 
              color="blackAlpha.700"
            />
          </Button>
          <Image 
            src={image_url} alt="Carro"
            borderRadius="md"
            maxHeight="24"
          />
          <Heading
            as="h3"
            marginTop="2"
            fontWeight="bold"
            fontSize="md"
          >{ title }</Heading>
        </Flex>
      </Td>

      <Td>
        <Text marginTop="1">
          { formatPriceInReal(price) }
        </Text>
      </Td>

      <Td>
        <Flex alignItems="center">
          <Input 
            maxWidth="14"
            type="number"
            textAlign="center"
            value={quanty}
            onChange={({ target }) => onChangeProductQuanty(id, Number(target.value))}
          />
        </Flex>
      </Td>

      <Td isNumeric>
        <Text marginTop="1">
          { formatPriceInReal(price * quanty) }
        </Text>
      </Td>
    </Tr>
  )
}

export { ProductCart }