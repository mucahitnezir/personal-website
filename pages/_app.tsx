import type { AppProps } from 'next/app'

import Head from 'next/head'
import Script from 'next/script'

import '../styles/globals.css'
import { GTM_ID, GTM_AVAILABLE } from '../libs/gtm'
import { meta } from '../site.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>

        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />

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

      {GTM_AVAILABLE && (
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `
          }}
        />
      )}

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
