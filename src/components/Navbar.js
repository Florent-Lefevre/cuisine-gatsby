import React, {useState} from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import {Link} from "gatsby"


const getData = graphql`
    {
        site {
        siteMetadata {
            title
            }
        }
    }
    `;

const Navbar = () => {
    const data = useStaticQuery(getData);
    // const [isVisible, initHs] = useState(false)
    // const invokeCollapse = () => {
    //     return initHs(!isVisible)
    // }

    return (
            <nav class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-3">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span class="fs-4 align-items-center customTitle">{data.site.siteMetadata.title}</span>
                </a>
                <ul class="nav nav-pills align-items-center">
                    <li className="nav-item"><Link to ="/" activeClassName={ "active bg-success text-light" } className="nav-link text-success" >Accueil</Link></li>
                    <li className="nav-item"><Link to ="/recipes" activeClassName={ "active bg-success text-light" }  className="nav-link text-success">Mes recettes</Link></li>
                    <li className="nav-item"><Link to ="/about" activeClassName={ "active bg-success text-light" } className="nav-link text-success">A propos</Link></li>
                </ul>
                </header>
            </nav>

)
}

export default Navbar