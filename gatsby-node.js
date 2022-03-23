const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String!
      subtitle: String!
      date: Date!
      type: String!
      keywords: [String!]!
      headimage: String!
    }
  `
  createTypes(typeDefs)
}

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/BlogPost.jsx`)
  const result = await graphql(`
  query {
    allMarkdownRemark(
      sort: {fields: frontmatter___date}
      filter: {frontmatter: {type: {eq: "blog"}}}
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
          id
        }
      }
    }
  }
  `)

  const posts = result.data.allMarkdownRemark.edges
  console.log("Slug : ", posts[0].node.id)

  posts.forEach(edge => {
    createPage({
      path: `blog/${edge.node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        title: edge.node.frontmatter.title,
        id: edge.node.id
      }
    })
  })
}