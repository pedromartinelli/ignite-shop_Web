import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import Image from 'next/image'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

import { globalStyles } from '@/styles/globals'

import { Container, Header } from '@/styles/pages/app'
import logoImg from '@/assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Image src={logoImg} alt='ignite shop' />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
