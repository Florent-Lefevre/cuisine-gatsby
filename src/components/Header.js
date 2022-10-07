import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const getData = graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `;



const Header = () => {
  const data = useStaticQuery(getData);
  return (
    <div className='header'>
        <StaticImage src="../images/banner.jpg" alt="a banner"       
        placeholder="blurred"

        objectFit="cover"
        objectPosition="bottom"
        width={1280}
        height={400}
        />
        <h1 className='siteTitle'>
            {data.site.siteMetadata.title}
        </h1>
        <h2>Crée par : {data.site.siteMetadata.author}</h2>
        <h3>{data.site.siteMetadata.description}</h3>
    </div>
  )
}

export default Header
