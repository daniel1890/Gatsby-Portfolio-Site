import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  const data = useStaticQuery(graphql`
    query siteInfo {
      site {
        id
        siteMetadata {
          copyright
          description
          title
        }
      }
    }
  `)

  console.log(data)
  const { title, description } = data.site.siteMetadata
  console.log(title)
  console.log(description)

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
        <StaticImage
          src="../../public/home-page-image.png"
          alt="Man working on personal computer get's a 404 error"
          style={{ maxWidth: "100%" }}
        ></StaticImage>
      </section>
    </Layout>
  )
}

//export default Home
