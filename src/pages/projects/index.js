import React from "react"
import Layout from "../../components/Layout"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import { portfolio, projects } from '../../styles/projects.module.css'

const index = ({ data }) => {
  const projects_data = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projecten & Websites Die Ik Gecreeërd heb</h3>
        <div className={projects}>
          {projects_data.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
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