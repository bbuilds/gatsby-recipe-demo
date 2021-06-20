import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
export default function Home() {
  return (
    <div>
      <Layout>
        <main className="page">
          <header className="hero">
            <StaticImage
              src="../assets/images/main.jpeg"
              alt="eggs"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
            <div className="hero-container">
              <div className="hero-text">
                <h1>Simple Recipes</h1>
                <h4>no fucking fluff</h4>
              </div>
            </div>
          </header>
          <AllRecipes />
        </main>
      </Layout>
    </div>
  )
}
