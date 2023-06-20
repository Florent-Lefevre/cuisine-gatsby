import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
    return (
        <>
        <div class="bg-dark text-secondary px-4 py-5 my-5 text-center">
            <div class="py-5">
            <h1 class="display-5 fw-bold text-light">Dark color hero</h1>
            <div class="col-lg-6 mx-auto text-light">
                <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-success btn-lg text-light px-4 me-md-2"><FontAwesomeIcon icon={faEnvelope} className="pe-2"/>Contactez-moi</button>
                <button type="button" class="btn btn-light btn-lg px-4 me-md-2">Linkedin</button>
                <button type="button" class="btn btn-light btn-lg px-4">Github</button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Contact