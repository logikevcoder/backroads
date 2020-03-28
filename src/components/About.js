import React from "react"
import Title from "./Title"
import styles from "../css/about.module.css"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = ({ data }) => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title={"about"} subtitle={"us"} />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde fugit
            deserunt perferendis quae repellat laudantium adipisci suscipit
            deleniti at fugiat incidunt est rerum, ullam facilis debitis iste.
            Eligendi, harum dicta.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            veniam aliquam architecto aperiam, ab deleniti amet optio iusto
            voluptatum reiciendis ipsa, animi possimus blanditiis culpa adipisci
            placeat laborum dolorum quia?
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
