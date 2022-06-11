import Head from 'next/head'

import '../styles/globals.css'
import { meta } from '../site.config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />

        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />

        <link rel="canonical" href={meta.url} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
