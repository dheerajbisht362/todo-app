import '../styles/globals.css'
import MyDocument from './_document'

function MyApp({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
  </>
}

export default MyApp
