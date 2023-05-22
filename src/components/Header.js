import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <div className='banner'>
        <StaticImage src="../images/banner.jpg" alt="a banner"       
        placeholder="blurred"

        objectFit="cover"
        objectPosition="bottom"
        width={1920}
        height={400}
        />
    </div>
  )
}

export default Header
