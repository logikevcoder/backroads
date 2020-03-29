import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "../css/layout.css"

const layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default layout
