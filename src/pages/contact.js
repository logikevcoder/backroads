import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.contactBg.childImageSharp.fluid} />
    </Layout>
  )
}

export default contact

export const query = graphql`
  {
    contactBg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
