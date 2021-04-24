import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import FontLink from 'components/FontLink'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
          <FontLink link="HelveticaNeue-Light.otf" />
          <FontLink link="HelveticaNeue-Medium.otf" />
          <FontLink link="Roboto-Thin" />
          <FontLink link="Roboto-Thin" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
