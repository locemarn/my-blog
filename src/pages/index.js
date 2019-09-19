import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem 
      slug="/about/"
      background="red"
      category="Misc"
      date="19 de Setembro de 2019"
      timeToRead="5"
      title="Post Title"
      description="Post description"
    />
  </Layout>
)

export default IndexPage
