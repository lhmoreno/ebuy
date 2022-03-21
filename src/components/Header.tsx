import NextLink from 'next/link'
import { Box, Container, Heading, Link, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <Container
      as="header"
      maxW="container.xl"
      marginY="8"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <NextLink href="/" passHref>
        <Link>
          <Heading 
            as="h1" 
            fontSize="2xl" 
            fontWeight="bold"
            letterSpacing="wider"
          >Ebuy</Heading>
        </Link>
      </NextLink>

      {/* <InputGroup width="50%">
        <InputLeftElement 
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          placeholder="Buscar produto..."
        />
      </InputGroup> */}

      <Box as="nav">
        <NextLink href="/" passHref>
          <Link 
            letterSpacing="wide" 
            marginX="2"
          >Produtos</Link>
        </NextLink>
        <NextLink href="/cart" passHref>
          <Link 
            letterSpacing="wide" 
            marginX="2"
          >Carrinho</Link>
        </NextLink>
        <NextLink href="/login">
          <Link 
            letterSpacing="wide" 
            marginX="2"
          >Conecte-se</Link>
        </NextLink>
      </Box>
    </Container>
  )
}

export { Header }