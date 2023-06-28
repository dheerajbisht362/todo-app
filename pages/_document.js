import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: 'window.liveSettings={api_key:"e69fca72d6b743f4a850fa9a9a51846f"}',
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
  