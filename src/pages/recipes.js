import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faBurger, faCookieBite } from '@fortawesome/free-solid-svg-icons'

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

    const iconType = (type) => {
      let iconSet = <FontAwesomeIcon icon={faBurger} />
      if (type === "Dessert") {
        iconSet = <FontAwesomeIcon icon={faCookieBite} />
      } 
      else if (type === "Entrée") {
        iconSet = <FontAwesomeIcon icon={faCarrot} />
      }
      return iconSet
    }

    return (
        <Layout>
          <div className="bg-light">
            <div className="container col-xxl-10 px-4 py-5">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {recipes.map(recipe => {
                const image = getImage(recipe.picture)

                return (
                  <article key={recipe.id} className="col">
                    <div className="card shadow-sm m-2">
                      <GatsbyImage image={image} 
                      alt={recipe.name} 
                      placeholder="blurred"
                      className="bd-placeholder-img card-img-top"/>
                      <div className="card-body">
                        <h4 className="card-text text-center text-primary pb-3">{recipe.name}</h4>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <Link to={`/recipes/${recipe.slug}`}><button type="button" className="btn btn-success btn-lg text-light px-4 me-md-2">Recette</button></Link>
                          </div>
                          <div><h4 className="text-body-secondary">{iconType(recipe.type)}</h4></div>
                        </div>
                      </div>
                    </div>
                  </article>

                )
              })}

              </div>
            </div>
          </div>
        </Layout>

    )
}




export default Recipes