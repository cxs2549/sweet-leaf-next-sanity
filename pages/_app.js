import "../styles/globals.scss"
import Footer from "../components/Footer"
import { StateContext } from "../context/StateContext"
import dynamic from "next/dynamic"

const NoSSRHeader = dynamic(() => import("../components/Header/Header"), {
  ssr: false,
})
function MyApp({ Component, pageProps, logo }) {
  return (
    <StateContext>
      <NoSSRHeader logo={logo} />
      <Component {...pageProps} />
      <Footer />
    </StateContext>
  )
}

export default MyApp
