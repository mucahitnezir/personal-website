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
          <meta name="theme-color" content="#282828" />

          {/* icons */}
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="manifest" href="/icons/site.webmanifest" />
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
