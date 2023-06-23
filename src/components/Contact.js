import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const getData = graphql`
    {
        site {
            siteMetadata {
            author
            email
            linkedin
            github
            aboutMe
            }
        }
        }
    `;

const Contact = () => {
    const data = useStaticQuery(getData);
    const email = "mailto:"+data.site.siteMetadata.email;
    return (
        <div class="px-4 py-5 my-5 text-center">
            <div class="py-2">
                <div className='pb-5'>
                    <StaticImage src="../images/author.jpeg" alt="author"       
                        placeholder="blurred"
                        objectFit="cover"
                        width={300}
                        height={300}
                        className='rounded-circle'
                    />
                </div>
                <h1 class="display-5 fw-bold">Hey ! Je suis {data.site.siteMetadata.author}</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="fs-5 mb-4">{data.site.siteMetadata.aboutMe}</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href={email} target="_blank"><button type="button" class="btn btn-success btn-lg text-light px-4 me-md-2"><FontAwesomeIcon icon={faEnvelope} className="pe-2"/>Contactez-moi</button></a>
                        <a href={data.site.siteMetadata.linkedin} target="_blank"><button type="button" class="btn btn-outline-secondary btn-lg px-4 me-md-2"><FontAwesomeIcon icon={faLinkedin} className="pe-2"/>Linkedin</button></a>
                        <a href={data.site.siteMetadata.github} target="_blank"><button type="button" class="btn btn-outline-secondary btn-lg px-4"><FontAwesomeIcon icon={faGithub} className="pe-2"/>Github</button></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact