import "../styles/globals.scss"
import Footer from "../components/Footer"
import { StateContext } from "../context/StateContext"
import Header from "../components/Header/Header"

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
