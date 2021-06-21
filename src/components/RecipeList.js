import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"
function RecipeList({ recipes = [] }) {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const slug = slugify(recipe.title, { lower: true })
        return (
          <Link to={`/${slug}`} key={recipe.id} className="recipe">
            <GatsbyImage
              image={recipe.image.gatsbyImageData}
              className="recipe-img"
              alt={recipe.title}
            />
            <h5>{recipe.title}</h5>
            <p>
              Prep: {recipe.prepTime} | Cook: {recipe.cookTime}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipeList
