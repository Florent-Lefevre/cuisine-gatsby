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
        <div className="bg-light">
            <div class="container">
              <div class="row pt-5">
                <div class="col-4">
                  <Link to="/recipes"><button type="button" class="btn btn-success text-light me-md-2">Retournez à la liste des recettes</button></Link>
                  <div className="sticky-top">
                    <div className="pt-1"></div>
                    <div class="card mt-3">
                      <div class="card-body">
                        <h5 class="card-title text-info">Ingrédients</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">{ingredients}</h6>
                      </div>
                    </div>
                    <div className="pb-5"></div>
                  </div>
                </div>
                <div class="col-6">
                  <h1 className="card-text text-center text-info">{name}</h1>
                  <small className="text-body-secondary fst-italic">{type}</small>
                  <GatsbyImage image={image} alt={name} placeholder="blurred" class="rounded"/>
                  <p>{steps}</p>
                  <p>Ajouter un carrousel d'images de la recette</p>
                </div>
              </div>
            </div>
        </div>
      </Layout>
    )

}

export default recipeTemplate