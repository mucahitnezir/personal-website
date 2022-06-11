import Document, { Html, Head, Main, NextScript } from 'next/document'

import { meta } from "../site.config";

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
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
