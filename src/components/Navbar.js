import React, {useState} from 'react'
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [navVisibility, setNavVisibility] = useState(true);
    const visibilityToggle = () => {
        setNavVisibility(!navVisibility)
    }
    return (
            <nav className={navVisibility ? "navMenu bgMenu" : "navMenu"}> 
                <ul>
                { navVisibility ? 
                    <>
                        <li>
                            <Link to ="/"><FontAwesomeIcon icon={faHouse} className="navLink" /></Link>
                        </li>
                        <li>
                            <Link to ="/recipes"  className="navLink ">Recettes</Link>
                        </li>
                        <li>
                            <Link to ="/about"  className="navLink">A propos</Link>
                        </li>
                    </>
                        : ""
                    }
                        
                        <span onClick={visibilityToggle} className="navIcon navLink" >{ navVisibility ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</span>
                </ul>
            </nav>
    )
}

export default Navbar