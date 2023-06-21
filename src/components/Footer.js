import React from 'react'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div class="bg-dark px-5 py-5 text-center">
            <nav class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-3">
                  <ul class="nav nav-pills align-items-center">
                      <li className="nav-item"><Link to ="/"><FontAwesomeIcon icon={faHouse} className="nav-link text-white text-white" /></Link></li>
                      <li className="nav-item"><Link to ="/recipes"  className="nav-link text-white">Mes recettes</Link></li>
                      <li className="nav-item"><Link to ="/about"  className="nav-link text-white">A propos</Link></li>
                  </ul>
                  <ul class="nav nav-pills align-items-center">
                      <li className="nav-item"><FontAwesomeIcon icon={faEnvelope} className="nav-link text-white"/></li>
                      <li className="nav-item"><FontAwesomeIcon icon={faLinkedin} className="nav-link text-white"/></li>
                      <li className="nav-item"><FontAwesomeIcon icon={faGithub} className="nav-link text-white"/></li>
                  </ul>
                </header>
            </nav>
    </div>
  )
}

export default Footer