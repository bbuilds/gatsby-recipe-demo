import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import TagsList from "./TagsList"
import RecipeList from "./RecipeList"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

function AllRecipes() {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipeList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
