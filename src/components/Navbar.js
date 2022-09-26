import React from 'react'
import {Link} from "gatsby"

const Navbar = () => {
  return (
        <nav>
            <ul>
                <li>
                    <Link to ="/">Accueil</Link>
                </li>
                <li>
                    <Link to ="/recipes">Recettes</Link>
                </li>
                <li>
                    <Link to ="/about">A propos</Link>
                </li>
            </ul>
        </nav>
  )
}

export default Navbar