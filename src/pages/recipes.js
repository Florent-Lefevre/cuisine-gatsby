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
          <div className="row">
          {recipes.map(recipe => {
              const image = getImage(recipe.picture)
            return (
            <article key={recipe.id} class="card col-3 mx-3">
                <GatsbyImage image={image} alt={recipe.name} class="card-img-top" />
                <div class="card-body">
                  <h2>{recipe.name}</h2>
                  <p>{recipe.type}</p>
                  <Link to={`/recipes/${recipe.slug}`}><button type="button" class="btn btn-primary">lien vers la recette</button></Link>
                </div>
            </article>
            )
          })}
          </div>
        </Layout>

    )
}




export default Recipes