const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions
	const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String!
      description: String!
      date: Date!
      type: String!
      slug: String!
      keywords: [String!]!
      image: String!
      imagedescription: String!
    }
  `
	createTypes(typeDefs)
}

exports.onPostBuild = ({ reporter }) => {
	reporter.info(`Your Gatsby site has been built!`)
}
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve(`src/templates/BlogPost.tsx`)
	const result = await graphql(`
		query {
			allMarkdownRemark(
				sort: { fields: frontmatter___date }
				filter: { frontmatter: { type: { eq: "blog" } } }
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

	posts.forEach((edge) => {
		createPage({
			path: `blog/${edge.node.frontmatter.slug}`,
			component: blogPostTemplate,
			context: {
				title: edge.node.frontmatter.title,
				id: edge.node.id,
			},
		})
	})
}
