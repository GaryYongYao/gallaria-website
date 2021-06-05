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
          <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossOrigin="anonymous" async />
          <link rel="stylesheet" type="text/css" href="https://unpkg.com/fullpage.js@3.0.1/dist/fullpage.min.css" />
          <FontLink link="HelveticaNeue-Light.otf" />
          <FontLink link="HelveticaNeue-Medium.otf" />
          <FontLink link="HelveticaNeue-Regular.ttf" />
          <FontLink link="HelveticaNeue-Bold.ttf" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script> </script>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: 'var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "cd4d3662a53bdaa92c5d66811da548f98f1efc47d3c30ba6f08544d7d82c6d69", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com.au/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id=\'zsiqwidget\'></div>");'
            }}
          /> */}
        </body>
      </Html>
    )
  }
}
