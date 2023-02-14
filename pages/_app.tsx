import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'
import { Space_Grotesk } from '@next/font/google'

const myFont = localFont({ src: [
  {
    path: "./customFont/webfonts/Pacaembu-Light-Trial.woff",
  },
  {
    path: "./customFont/webfonts/Pacaembu-Bold-Trial.woff",
  },
  {
    path: "./customFont/webfonts/Pacaembu-Black-Trial.woff",
  },
  {
    path: "./customFont/webfonts/Pacaembu-Medium-Trial.woff",
  },
]
})

const space_grotesk = Space_Grotesk({ subsets:['latin']})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={space_grotesk.className}>
      <Component {...pageProps} />
    </main>
  )
}
