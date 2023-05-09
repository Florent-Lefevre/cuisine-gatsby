import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export const query = graphql`
  query ($slug: String) {
    recipe: contentfulCuisineGatsby(slug: {eq: $slug}) {
      id
      ingredients {
        ingredients
      }
      name
      slug
      steps {
        steps
      }
      type
      picture {
        gatsbyImageData
      }
    }
  }
`

const recipeTemplate = ({ data:{recipe:{name,type,ingredients:{ingredients},steps:{steps},picture}} }) => {

    const image = getImage(picture)
    return (
        <Layout>
            <div>
                <Link to="/recipes">retour aux recettes</Link>
                <h1>nom : {name}</h1>
                <GatsbyImage image={image} alt={name} placeholder="blurred"/>
            </div>
        </Layout>
    )

}

export default recipeTemplate