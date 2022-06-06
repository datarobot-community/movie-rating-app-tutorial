import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
)}

export default MyApp
