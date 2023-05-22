/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata:{
    title: 'Cuisine Gatsby',
    description: 'Retrouvez mes recettes de cuisine',
    heroe: `Qui ne s'est jamais perdu entre 2 publicité et 4 vidéos pour obtenir la liste des ingrédients de simple cookies. Vous trouverez ici mes recettes simples et approuvées.`,
    author: 'Florent Lefèvre'
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4e4nyq1pjjlu`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    {
    resolve: `gatsby-plugin-sass`,
    options: {
    implementation: require("sass"),
    },
  },
  ],
}
