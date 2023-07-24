import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const getData = graphql`
    {
        site {
            siteMetadata {
            email
            linkedin
            github
            }
        }
        }
    `;
    
const Footer = () => {
  const data = useStaticQuery(getData);
  const email = "mailto:"+data.site.siteMetadata.email;
    
  return (
    <div className="bg-dark px-5 py-5 text-center">
            <nav className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-3">
                  <ul className="nav nav-pills align-items-center">
                      <li className="nav-item"><Link to ="/"><FontAwesomeIcon icon={faHouse} className="nav-link text-white text-white" /></Link></li>
                      <li className="nav-item"><Link to ="/recipes"  className="nav-link text-white">Mes recettes</Link></li>
                      <li className="nav-item"><Link to ="/about"  className="nav-link text-white">A propos</Link></li>
                  </ul>
                  <ul className="nav nav-pills align-items-center">
                      <a href={email} target="_blank"><li className="nav-item"><FontAwesomeIcon icon={faEnvelope} className="nav-link text-white"/></li></a>
                      <a href={data.site.siteMetadata.linkedin} target="_blank"><li className="nav-item"><FontAwesomeIcon icon={faLinkedin} className="nav-link text-white"/></li></a>
                      <a href={data.site.siteMetadata.github} target="_blank"><li className="nav-item"><FontAwesomeIcon icon={faGithub} className="nav-link text-white"/></li></a>
                  </ul>
                </header>
            </nav>
    </div>
  )
}

export default Footer