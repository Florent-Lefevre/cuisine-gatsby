import React, {useState} from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'


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
    const [isVisible, initHs] = useState(false)
    const invokeCollapse = () => {
        return initHs(!isVisible)
    }

    return (
            <nav class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-3">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span class="fs-4 align-items-center customTitle">{data.site.siteMetadata.title}</span>
                </a>
                <ul class="nav nav-pills align-items-center">
                    <li className="nav-item"><Link to ="/"><FontAwesomeIcon icon={faHouse} className="nav-link text-success" /></Link></li>
                    <li className="nav-item"><Link to ="/recipes"  className="nav-link text-success">Mes recettes</Link></li>
                    <li className="nav-item"><Link to ="/about"  className="nav-link text-success">A propos</Link></li>
                </ul>
                </header>
            </nav>

)
}

export default Navbar