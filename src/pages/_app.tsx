import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'

import { CartContextProvider } from '../contexts/CartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <ChakraProvider>
          <CartContextProvider>
            <Component {...pageProps} />
          </CartContextProvider>
      </ChakraProvider>
    </UserProvider>
  )
}

export default MyApp
