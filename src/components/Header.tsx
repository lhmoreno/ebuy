import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Heading, Link } from '@chakra-ui/react'

type Pathname = '/' | '/store' | '/cart' | '/signin' | '/forgot-password'
type PageName = 'home' | 'store' | 'cart' | 'account'

const handlePageName: (pathname: Pathname) => PageName = (pathname) =>  {
  if (pathname === '/') return 'home'
  if (pathname === '/store') return 'store'
  if (pathname === '/cart') return 'cart'
  if (pathname === '/signin') return 'account'
  if (pathname.includes( 'admin')) return 'account'
  if (pathname === '/forgot-password') return 'account'
  return 'home'
}

const Header = () => {
  const router = useRouter()
  const pathname = router.pathname as Pathname
  const [pathnameActive, setPathnameActive] = useState<PageName>(handlePageName(pathname))

  useEffect(() => {
    setPathnameActive(handlePageName(pathname))
  }, [pathname])

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

      <Box as="nav">
        <NextLink href="/store" passHref>
          <Link 
            letterSpacing="wide" 
            marginX="2"
            fontWeight={pathnameActive === 'store' ? 'bold' : undefined}
          >Loja</Link>
        </NextLink>
        <NextLink href="/cart" passHref>
          <Link 
            letterSpacing="wide" 
            marginX="2"
            fontWeight={pathnameActive === 'cart' ? 'bold' : undefined}
          >Carrinho</Link>
        </NextLink>
        <NextLink href="/signin">
          <Link 
            letterSpacing="wide" 
            marginX="2"
            fontWeight={pathnameActive === 'account' ? 'bold' : undefined}
          >Administração</Link>
        </NextLink>
      </Box>
    </Container>
  )
}

export { Header }