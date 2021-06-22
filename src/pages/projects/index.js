import React from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/projects.module.css"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

const index = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projecten & Websites Die Ik Gecreeërd heb</h3>
        <div>
          {projects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>{project.frontmatter.title}</Link>
          ))}
        </div>

      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        id
        html
        frontmatter {
          slug
          stack
          title
        }
      }
    }
  }
`

export default index