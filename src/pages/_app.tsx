import type { AppProps } from 'next/app'

import '../styles/globals.css'

function Ebuy({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Ebuy