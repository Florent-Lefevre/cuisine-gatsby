import React, {useState} from 'react'
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import { Button, Collapse } from 'react-bootstrap'

const Navbar = () => {
  const [isVisible, initHs] = useState(false)
  const invokeCollapse = () => {
    return initHs(!isVisible)
  }

    return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid layout">
                    <Button className="navbar-toggler bg-light" type="button"  onClick={invokeCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <Collapse in={isVisible}>
                        <div className="navbar-collapse">
                            <header class="d-flex flex-wrap justify-content-center">
                                <ul class="nav nav-pills align-items-center">
                                    <li className="nav-item"><Link to ="/"><FontAwesomeIcon icon={faHouse} className="nav-link" /></Link></li>
                                    <li className="nav-item"><Link to ="/recipes"  className="nav-link">Recettes</Link></li>
                                    <li className="nav-item"><Link to ="/about"  className="nav-link">A propos</Link></li>
                                </ul>
                            </header>
                        </div>
                    </Collapse>
                </div>
            </nav>

)
}

export default Navbar