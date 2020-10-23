import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="de">
        <Head>
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
          <meta name="msvalidate.01" content="35B7B49272873FF353E58BB8EAD467D5" />
          <meta name="yandex-verification" content="80d061cfbf55597b" />
          <meta name="google-site-verification" content="-r180x3486vxuybm-3wUlbOOp7a3WpTZE2xi7Swu-fs" />
          <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/favicons/site.webmanifest" rel="manifest" />
          <link color="#000000" href="/favicons/safari-pinned-tab.svg" rel="mask-icon" />
          <link href="/favicons/favicon.ico" rel="shortcut icon" />
        </Head>
        <body className="bg-white">
          <div id="auth0-keys" className="hidden">
            <input type="hidden" name="_csrf" value="{{csrf_token}}" />
            <input type="hidden" name="ticket" value="{{ticket}}" />
            <input type="hidden" name="email" value="{{email}}" />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
