import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout'

const getData = graphql`
  query {
    allContentfulCuisineGatsby {
      nodes {
        picture {
          gatsbyImageData(height: 250)
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
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {recipes.map(recipe => {
              const image = getImage(recipe.picture)
              return (
                <article key={recipe.id} class="col">
                  <div class="card shadow-sm">
                    <GatsbyImage image={image} 
                    alt={recipe.name} 
                    placeholder="blurred"
                    class="bd-placeholder-img card-img-top"/>
                    <div class="card-body">
                      <p class="card-text">{recipe.name}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <Link to={`/recipes/${recipe.slug}`}><button type="button" class="btn btn-sm btn-outline-secondary bg-success">Recette</button></Link>
                        </div>
                        <small class="text-body-secondary">{recipe.type}</small>
                      </div>
                    </div>
                  </div>
                </article>

              )
            })}

            </div>
          </div>
        </Layout>

    )
}




export default Recipes