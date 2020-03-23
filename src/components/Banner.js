import React from "react"
import styles from "../css/banner.module.css"

const Banner = ({ heading, copy, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{heading}</h1>
      <p>{copy}</p>
      {children}
    </div>
  )
}

export default Banner
