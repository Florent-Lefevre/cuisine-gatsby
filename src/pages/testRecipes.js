import React from 'react'
import Layout from '../components/layout'

import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const testRecipes = ({ data }) => {
  const image = getImage(data.croissant)
  return (
    <Layout>
        Toutes les recettes

      <section>
        <GatsbyImage image={image} alt="aaa" />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    croissant: imageSharp(resize: {originalName: {eq: "croissant.jpg"}}) {
      id
      gatsbyImageData(
        height: 200
        placeholder: BLURRED)
    }
  }
`


export default testRecipes