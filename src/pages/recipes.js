import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout'

const getData = graphql`
  query {
    allContentfulCuisineGatsby {
      nodes {
        picture {
          gatsbyImageData
        }
        name
        ingredients {
          ingredients
        }
        id
        steps {
          steps
        }
        type
        slug
      }
    }
  }
`;

const Recipes = () => {
    const {allContentfulCuisineGatsby:{nodes:recipes}} = useStaticQuery(getData);

    return (
        <Layout>
          {recipes.map(recipe => {
              const image = getImage(recipe.picture)
            return (
            <article key={recipe.id}>
                <h2>{recipe.name}</h2>
                <h3>{recipe.type}</h3>
                <GatsbyImage image={image} alt={recipe.name} />
                <Link to={`/recipes/${recipe.slug}`}><button>lien vers la recette</button></Link>
            </article>
            )
          })}
        </Layout>

    )
}




export default Recipes