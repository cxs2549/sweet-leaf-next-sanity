import Header from "../components/Header/Header"
import "../styles/globals.scss"
import { client } from "../lib/client"
import Footer from '../components/Footer'
import { StateContext } from "../context/StateContext"

function MyApp({ Component, pageProps, logo }) {
  return (
    <StateContext>
      <Header logo={logo} />
      <Component {...pageProps} />
      <Footer />
    </StateContext>
  )
}

export default MyApp
