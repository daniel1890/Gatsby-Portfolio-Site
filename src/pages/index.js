import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default function Home({ data }) {
  const banner_img = data.file.childImageSharp.gatsbyImageData

  console.log(data)
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Ontwikkel & Deploy</h3>
          <p>
            Programmeer liefhebber geïnteresseerd in Web-Dev; front- & back-end.
          </p>
          <Link className={btn} to="/projects">
            Mijn Portfolio Projecten
          </Link>
        </div>
        <GatsbyImage
          image={banner_img}
          alt="Man working on personal computer get's a 404 error"
        ></GatsbyImage>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "home-page-image.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: AUTO
        )
      }
    }
  }
`
