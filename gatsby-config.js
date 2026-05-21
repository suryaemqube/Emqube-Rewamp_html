/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Emqube`,
    description: `Emqube - Software Solutions House`,
    author: `@emqube`,
    siteUrl: `https://emquberevamphtml.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://mohammeds161.sg-host.com/graphql`,
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 5,
              excludeByMimeTypes: [],
            },
          },
        },
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
  ],
}
