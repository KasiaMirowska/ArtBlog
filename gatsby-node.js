const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true }}}
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY MMMM Do")
              title
            }
          }
        }
      },
      allImageSharp {
        nodes {
          original {
            src
          }
        }
      }
    }
  `).then(result => {
    if(result.errors) {
      throw result.errors;
    }
    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach(({ node }, index) => {
      const previous = index === posts.length-1? null : posts[index +1].node;
      const next = index === 0? null : posts[index-1].node;

      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/BlogPost.js`),
        context: {
          slug: node.fields.slug,
          previous,
          next
        },
      })
    })
  })
}