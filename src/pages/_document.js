import Document, { Html, Head, Main, NextScript } from 'next/document'

// const GA_TRACKING_ID = 'UA-131784128-1';

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
          <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/favicons/site.webmanifest" rel="manifest" />
          <link color="#000000" href="/favicons/safari-pinned-tab.svg" rel="mask-icon" />
          <link href="/favicons/favicon.ico" rel="shortcut icon" />
          {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
            `,
            }}
          /> */}
        </Head>
        <body className="bg-gray-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
