import React, {useState} from 'react'
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {


    return (
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarToggle">
                        <a class="navbar-brand" href="#">Logo</a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to ="/"><FontAwesomeIcon icon={faHouse} className="nav-link" /></Link>
                            </li>
                            <li class="nav-item">
                                <Link to ="/recipes"  className="nav-link">Recettes</Link>
                            </li>
                            <li class="nav-item">
                                <Link to ="/about"  className="nav-link">A propos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


)
}

export default Navbar