/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect, createSlice  } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const primary = await graphql(`
    query MyQuery {
      wpMenu(name: { eq: "Header Menu - Software Solutions House" }) {
        id
        menuItems {
          nodes {
            id
            label
            path
            parentId
            cssClasses
            target
          }
        }
      }
    }
  `);

  const options = await graphql(`
    query MyQuery {
      wp {
        acfOption {
          common {
            companyLogo {
              altText
              mediaItemUrl
            }
            companyLogoWhite {
              altText
              mediaItemUrl
            }
            socialLinks {
              socialLinkUrl
              socialIcon {
                altText
                mediaItemUrl
              }
            }
            whatsappurl
            brandLogos {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
  `);

  const footerSoftwareSolutionHouse = await graphql(`
    query MyQuery {
      wpMenu(name: { eq: "Footer Software Solution House" }) {
        id
        menuItems {
          nodes {
            id
            label
            path
            parentId
            cssClasses
            target
          }
        }
      }
    }
  `);

  const footerDigitalContentStudio = await graphql(`
    query MyQuery {
      wpMenu(name: { eq: "Footer Digital Content Studio" }) {
        id
        menuItems {
          nodes {
            id
            label
            path
            parentId
            cssClasses
            target
          }
        }
      }
    }
  `);

  const footerOtherLink = await graphql(`
    query MyQuery {
      wpMenu(name: { eq: "Footer Other Link" }) {
        id
        menuItems {
          nodes {
            id
            label
            path
            parentId
            cssClasses
            target
          }
        }
      }
    }
  `);

  if (primary.errors) {
    throw new Error(primary.errors);
  }

  if (options.errors) {
    throw new Error(options.errors);
  }

  if (footerSoftwareSolutionHouse.errors) {
    throw new Error(footerSoftwareSolutionHouse.errors);
  }

  if (footerDigitalContentStudio.errors) {
    throw new Error(footerDigitalContentStudio.errors);
  }

  if (footerOtherLink.errors) {
    throw new Error(footerOtherLink.errors);
  }

  const primaryNode = primary.data?.wpMenu?.menuItems?.nodes || [];

  const optionsNode = options.data?.wp?.acfOption?.common || [];

  const footerSoftwareSolutionHouseNode = footerSoftwareSolutionHouse.data?.wpMenu?.menuItems?.nodes || [];

  const footerDigitalContentStudioNode = footerDigitalContentStudio.data?.wpMenu?.menuItems?.nodes || [];

  const footerOtherLinkNode = footerOtherLink.data?.wpMenu?.menuItems?.nodes || [];

  const flatListToHierarchical = (
    data = [],
    { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {}
  ) => {
    const tree = [];
    const childrenOf = {};
    data.forEach((item) => {
      const newItem = { ...item };
      const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
      childrenOf[id] = childrenOf[id] || [];
      newItem[childrenKey] = childrenOf[id];
      parentId
        ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
        : tree.push(newItem);
    });
    return tree;
  };

  const privHrhl = flatListToHierarchical(primaryNode);

  createSlice({
    id: `navigation-bar`,
    component: require.resolve(`./src/components/header.js`),
    context: {
      priMenuData: privHrhl,
      options: optionsNode,
    },
  });

  const footerSftSolHouse = flatListToHierarchical(footerSoftwareSolutionHouseNode);
  const footerDigiContStu = flatListToHierarchical(footerDigitalContentStudioNode);
  const footerOtherLi = flatListToHierarchical(footerOtherLinkNode);

  createSlice({
    id: `footer`,
    component: require.resolve(`./src/components/Footer.js`),
    context: {
      footSftSolHouse:footerSftSolHouse,
      footSftDigiCont:footerDigiContStu,
      footOthLink:footerOtherLi,
      options: optionsNode,
    },
  });

}
