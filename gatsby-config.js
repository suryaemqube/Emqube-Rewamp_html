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
    siteUrl: `https://emqube.com`,
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
        url: `https://wp.emqube.com/graphql`,
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            allWpPage {
              nodes {
                uri
                modifiedGmt
              }
            }
            allWpPortfolio{
              edges {
                node {
                  content
                  title
                  link
                  uri
                  slug
                  modifiedGmt
                  tags {
                    nodes {
                      name
                      slug
                    }
                  }
                }
              }
            }
            allWpBlog {
              edges {
                node {
                  title
                  date(formatString: "MMMM DD, YYYY")
                  featuredImage {
                    node {
                      altText
                      mediaItemUrl
                    }
                  }
                  content
                  link
                  slug
                  uri
                  modifiedGmt
                  blogCategories {
                    nodes {
                      slug
                      name
                    }
                  }
                }
              }
            }
          }
        `,
        resolveSiteUrl: () => "https://emqube.com",
        resolvePages: ({ allWpPage, allWpPost }) => {
          return [
            ...allWpPage.nodes,
            ...allWpPost.nodes,
          ]
        },
        serialize: ({ uri, modifiedGmt }) => ({
          url: uri,                  // uri is like /contact-us/ — plugin prepends siteUrl
          lastmod: modifiedGmt,
        }),
      },
    }
  ],
}
