"use client"
import dynamic from "next/dynamic"
import Layout from "../components/Layout"

const Page = dynamic(() => import("../components/BagPage"), { ssr: false })
const Bag = () => {
  return (
    <Layout>
      <Page />
    </Layout>
  )
}

export default Bag
