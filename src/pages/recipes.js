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

            {/* <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
              <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
              <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

              <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
              <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

              <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
              <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
            </div> */}
            
            <div class="container col-xxl-10 px-4 py-5">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {recipes.map(recipe => {
                const image = getImage(recipe.picture)

                return (
                  <article key={recipe.id} class="col">
                    <div class="card shadow-sm m-2">
                      <GatsbyImage image={image} 
                      alt={recipe.name} 
                      placeholder="blurred"
                      class="bd-placeholder-img card-img-top"/>
                      <div class="card-body">
                        <h4 class="card-text text-center text-primary pb-3">{recipe.name}</h4>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <Link to={`/recipes/${recipe.slug}`}><button type="button" class="btn btn-success btn-lg text-light px-4 me-md-2">Recette</button></Link>
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