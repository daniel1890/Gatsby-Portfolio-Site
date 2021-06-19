import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <StaticImage
          src="../../public/logo_thumbnail_white_large.png"
          alt="logo"
          width={25}
        />
      </div>
      <h1 className="title">Daniël Codes</h1>
      <div className="links">
        <Link to="../">Index</Link>
        <Link to="../about">About Me</Link>
        <Link to="../projects">Portfolio Projecten</Link>
      </div>
    </nav>
  )
}
