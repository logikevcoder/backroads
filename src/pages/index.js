import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"

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
  </Layout>
)
