import Head from 'next/head'

import '../styles/globals.css'
import { meta } from '../site.config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>

        <meta name="description" content={meta.description} />
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />

        {/* open graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />

        {/* twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={meta.url} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
