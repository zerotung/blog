const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              layout
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const { edges } = result.data.allMarkdownRemark

    const options = edges.map(edge => ({
      path: edge.node.fields.slug,
      title: edge.node.frontmatter.title,
      component: path.resolve(
        `src/templates/${edge.node.frontmatter.layout}.tsx`
      ),
      // additional data can be passed via context
      context: {
        id: edge.node.id
      }
    }))

    // render everthing except post drafts
    options
      .filter(
        (_, i) =>
          !(
            edges[i].node.frontmatter.layout === 'blog-post' &&
            edges[i].node.fields.draft
          )
      )
      .forEach(option => createPage(option))
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // GraphQL query over frontmatter.draft might throw error if
    // no post has this field.
    createNodeField({
      node,
      name: 'draft',
      value: Boolean(node.frontmatter.draft)
    })

    // Jeykll style post path
    const filepath = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: filepath.replace(
        /^\/blog\/([\d]{4})-([\d]{2})-([\d]{2})-/,
        '/blog/'
      )
    })
  }
}