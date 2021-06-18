import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Dope Ass Recipes</span> Built
        with Gatsby
      </p>
    </footer>
  )
}

export default Footer
