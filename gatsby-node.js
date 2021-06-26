const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    {
      projects: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.projects.nodes.forEach(project => {
    actions.createPage({
      path: "/projects/" + project.frontmatter.slug,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: project.frontmatter.slug },
    })
  })
}
