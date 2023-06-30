import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareCheck, faBookmark} from '@fortawesome/free-solid-svg-icons'

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
    
    const stepsArray = steps.split('\n')
    const ingredientsArray = ingredients.split('\n')
    const image = getImage(picture)
    return (
      <Layout>
        <div className="bg-light">
            <div className="container">
              <div className="d-flex flex-wrap justify-content-center row pt-5">
                <div className="col-11 col-md-4">
                  <Link to="/recipes"><button type="button" className="btn btn-success text-light col-12 me-md-2">Retournez à la liste des recettes</button></Link>
                  <div className="sticky-top">
                    <div className="pt-1"></div>
                    <div className="card mt-3">
                      <div className="card-body">
                        <h5 className="card-title text-info pb-3">Ingrédients</h5>
                        {ingredientsArray.map((ingredient, id)=> {
                          ingredient = ingredient[0].toUpperCase() + ingredient.slice(1);
                          return (
                              <h6 key={id} className="card-subtitle mb-2 text-body-secondary py-1"><FontAwesomeIcon icon={faSquareCheck} className="px-2 text-success"/>{ingredient}</h6>
                          )
                          })
                        }
                      </div>
                    </div>
                    <div className="pb-5"></div>
                  </div>
                </div>
                <div className="col-11 col-md-6">
                  <h1 className="card-text text-center text-info">{name}</h1>
                  <GatsbyImage 
                  image={image} 
                  alt={name} 
                  placeholder="blurred" 
                  width={200}
                  height={200}
                  className="d-flex flex-wrap justify-content-center rounded"/>
                  <div className="py-5">
                    {stepsArray.map((step, id)=> {
                        step = step[0].toUpperCase() + step.slice(1);
                        return (
                            <p key={id}><FontAwesomeIcon icon={faBookmark} className="px-2 text-success"/>{step}</p>
                        )
                      })
                    }
                  </div>
                  {/* <p>Ajouter un carrousel d'images de la recette</p> */}
                </div>
              </div>
            </div>
        </div>
      </Layout>
    )

}

export default recipeTemplate