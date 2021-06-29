import React from "react"
import { Link } from "gatsby"
import "../style.css"

const Layout = props => {
  return (
    <>
      <header>
        <nav className="nav">
          <Link to="/"><h1 className="nav__logo">Teddi Manibusan</h1></Link>
          <div className="nav__links">
            <Link to="/blog">BLOG</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <a href="https://www.linkedin.com/in/teddimanibusan/">LinkedIn</a>
          </div>
        </nav>
      </header>
      <main className="main">{props.children}</main>
      <footer className="footer">
        <div class="linkto">
      <a href="https://www.linkedin.com/in/teddimanibusan/">LinkedIn</a>
      <a href="https://github.com/PSP92">GitHub</a>
      <a href="">Youtube(coming soon)</a>
      <a href="">Twitter(coming soon)</a>
      </div>
      </footer>
    </>
  )
}

export default Layout
