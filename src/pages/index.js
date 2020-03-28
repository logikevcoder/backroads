import React from "react"
import { graphql, Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/About"
import Services from "../components/Services"
import StyledHero from "../components/StyledHero"

export default ({ data }) => (
  <Layout>
    <StyledHero home={true} img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        heading={"Example Heading"}
        copy={"Example paragraph text"}
        children={
          <AniLink fade to="/tours" className="btn-white">
            Go to Tours
          </AniLink>
        }
      />
    </StyledHero>
    <About />
    <Services />
  </Layout>
)

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
