import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Layout({ children }) {
  return (
    <div class="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <div class="container">
          <p class="footer-text">Copyright 2021 | Daniël Codes</p>
          <a href="https://github.com/daniel1890">
            <StaticImage
              class="git-logo"
              src="../../public/logo_git.png"
              alt="github-logo"
              href="https://github.com/daniel1890"
              style={{ width: "25px", height: "25px" }}
            ></StaticImage>
          </a>
        </div>
      </footer>
    </div>
  )
}
