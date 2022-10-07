import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <div>
        <h1>Footer</h1>
        <StaticImage src="../images/footer.jpg" alt="a footer"
          objectPosition="bottom"
          width={1280}
          height={400}
                  placeholder="blurred"

        objectFit="cover" />


    </div>
  )
}

export default Footer