import React from "react"
import Header from "./Navbar"
import Footer from "./Footer"

import "../css/layout.css"

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout
