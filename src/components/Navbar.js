import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAlignJustify } from "react-icons/fa"
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Simply Recipes" />
          </Link>
          <button
            className="nav-btn"
            onClick={() => {
              setShowNav(!showNav)
            }}
          >
            <FaAlignJustify />
          </button>
        </div>
        <div className={showNav ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShowNav(false)
            }}
          >
            home
          </Link>
          <Link
            to="/recipes/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShowNav(false)
            }}
          >
            recipes
          </Link>
          <Link
            to="/tags/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShowNav(false)
            }}
          >
            tags
          </Link>
          <Link
            to="/about/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShowNav(false)
            }}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link
              to="/contact/"
              className="btn"
              onClick={() => {
                setShowNav(false)
              }}
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
