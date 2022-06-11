import Document, { Html, Head, Main, NextScript } from 'next/document'

import { meta } from "../site.config";
import { GTM_ID, GTM_AVAILABLE } from '../libs/gtm'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* global meta tags */}
          <meta charSet="UTF-8" />
          <meta name="robots" content="follow, index" />
          <meta name="theme-color" content="#ebebeb" />

          {/* icons */}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-gray-100">
          {GTM_AVAILABLE && (
            /* Google Tag Manager (noscript) */
            <noscript>
              <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
            /* End Google Tag Manager (noscript) */
          )}

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
