import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const getData = graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          heroe
        }
      }
    }
  `;

export default function Home() {
  const data = useStaticQuery(getData);

  return (
  <Layout>
    <div  className="bg-light">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <StaticImage src="../images/heroe.jpg" alt="heroe"       
            placeholder="blurred"
            width={500}
            height={500}
            className="d-block mx-lg-auto"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{data.site.siteMetadata.description}</h1>
            <p className="lead">{data.site.siteMetadata.heroe}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to ="/recipes">
                <button type="button" className="btn btn-success btn-lg text-light px-4 me-md-2">
                    Mes recettes
                </button>
              </Link>
              <Link to ="/about">
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">A propos de moi</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>



  </Layout>
  )
}
