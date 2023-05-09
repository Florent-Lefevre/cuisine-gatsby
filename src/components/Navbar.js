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
                            <a className="navbar-brand d-none d-lg-block" href="#">Logo</a>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0  align-items-end">
                                <li className="nav-item">
                                    <Link to ="/"><FontAwesomeIcon icon={faHouse} className="nav-link" /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to ="/recipes"  className="nav-link">Recettes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to ="/about"  className="nav-link">A propos</Link>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                </div>
            </nav>
)
}

export default Navbar