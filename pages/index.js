import React from "react"
import Head from "next/head"
import { client } from "../lib/client"
import Layout from "../components/Layout"
import Hero from "../components/Home/Hero"
const Homepage = () => {
  return (
    <Layout>
      <Head>
        <title>Sweet Leaf</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="This is a cannabis dispensary online store."
        ></meta>
      </Head>
      <Hero />
    </Layout>
  )
}

// export const getStaticProps = async () => {
//   const logo = await client.fetch(`
//     *[_type == 'product']{_id, slug, price, name, image}`)

//   return {
//     props: { logo },
//   }
// }

export default Homepage
