import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const blog = ({ data }) => {
  console.log(
    "data..site.siteMetadata.data.age :",
    data.site.siteMetadata.data.age
  )

  return <Layout>Blog page</Layout>
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }
`

export default blog
