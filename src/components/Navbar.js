import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact activeClassName="nav-link" aria-current="page" to="/">{<button><b>About Me</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="nav-link" aria-current="page" to="/project">{<button><b>Projects</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="nav-link" aria-current="page" to="/skills">{<button><b>Skills</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="nav-link" aria-current="page" to="/experience">{<button><b>Experience</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="nav-link" aria-current="page" to="/blogs">{<button><b>Blogs</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="nav-link" aria-current="page" to="/contactme">{<button><b>Contact Me</b></button>}</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
