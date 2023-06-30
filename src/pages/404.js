import React from 'react'
import {Link} from "gatsby"

const page404 = () => {
  return (
    <body>
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    La page que vous recherchez n'existe pas.
                  </p>
                <Link to ="/" className="btn btn-primary">Retournez à l'accueil</Link>
            </div>
        </div>
    </body>
  )
}

export default page404