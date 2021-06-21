import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div class="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <div class="container">
          <p class="footer-text">Copyright 2021 | Daniël Codes</p>
          <Link to="https://github.com/daniel1890">
            <StaticImage
              class="git-logo"
              src="../../public/logo_git.png"
              alt="github-logo"
              href="https://github.com/daniel1890"
              width="25"
              height="25"
            ></StaticImage>
          </Link>
        </div>
      </footer>
    </div>
  )
}
