import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "../assets/css/normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
