import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { portfolio, projects } from "../../styles/projects.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

const index = ({ data }) => {
  const projects_data = data.projects.nodes
  const contact_data = data.contact.siteMetadata.contact
  console.log(data)

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projecten & Websites Die Ik Gecreeërd heb</h3>
        <div className={projects}>
          {projects_data.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  alt="project thumbnail"
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                ></GatsbyImage>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Waardeer je wat je ziet? Email mij at {contact_data}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        id
        html
        frontmatter {
          date
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: AUTO
              )
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`

export default index
