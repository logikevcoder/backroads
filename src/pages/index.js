import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/About"
import Services from "../components/Services"

export default () => (
  <Layout>
    <SimpleHero
      children={
        <Banner
          heading={"Example Heading"}
          copy={"Example paragraph text"}
          children={
            <Link to="/tours" className="btn-white">
              Go to Tours
            </Link>
          }
        />
      }
    />
    <About />
    <Services />
  </Layout>
)
