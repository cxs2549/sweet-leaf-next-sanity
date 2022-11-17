import Header from "../components/Header/Header"
import "../styles/globals.scss"
import { client } from "../lib/client"

function MyApp({ Component, pageProps, logo }) {
  return (
    <div>
      <Header logo={logo} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
