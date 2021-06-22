import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <div className="logo">
        <Link to="../index.js">
          <StaticImage
            src="../../public/logo_thumbnail_white_large.png"
            alt="logo"
            width={40}
            height={50}
          />
        </Link>
      </div>
      <h1 className="title">{ title }</h1>
      <div className="links">
        <Link to="../">Index</Link>
        <Link to="../about">About Me</Link>
        <Link to="../projects">Portfolio Projecten</Link>
      </div>
    </nav>
  )
}
