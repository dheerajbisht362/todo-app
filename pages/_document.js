import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: 'window.liveSettings={api_key:"ac97fc0e63c1459582e33559cec8a5d5"}',
              }}
            ></script>
            <script type="text/javascript" src="//cdn.transifex.com/live.js"></script>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
  