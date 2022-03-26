import { StarIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'

interface RatingProps {
  stars: number
}

const Rating = ({ stars }: RatingProps) => {
  const colors = [
    stars >= 1 ? undefined : 'gray.300',
    stars >= 2 ? undefined : 'gray.300',
    stars >= 3 ? undefined : 'gray.300',
    stars >= 4 ? undefined : 'gray.300',
    stars >= 5 ? undefined : 'gray.300'
  ]

  return (
    <Box>
      <StarIcon w={3} h={3} mr={1} color={colors[0]} />
      <StarIcon w={3} h={3} mr={1} color={colors[1]} />
      <StarIcon w={3} h={3} mr={1} color={colors[2]} />
      <StarIcon w={3} h={3} mr={1} color={colors[3]} />
      <StarIcon w={3} h={3} color={colors[4]} />
    </Box>
  )
}

export { Rating }
