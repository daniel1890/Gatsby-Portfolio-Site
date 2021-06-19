import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <h1>Daniël Roth</h1>
      <div className="links">
        <Link to="../">Index |</Link>
        <Link to="../about"> About Me |</Link>
        <Link to="../projects"> Portfolio Projecten</Link>
      </div>
    </nav>
  )
}
