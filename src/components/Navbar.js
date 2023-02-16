import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  const [selected, setSelected] = useState(false)

 function toggleClass () {
  setSelected(!selected)
 }

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
                <NavLink exact activeClassName={selected ? "nav-link" : "nav-link active"} aria-current="page" to="/">{<button onClick={toggleClass}><b>About Me</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName={selected ? "nav-link" : "nav-link active"} aria-current="page" to="/project">{<button onClick={toggleClass}><b>Projects</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName={selected ? "nav-link" : "nav-link active"} aria-current="page" to="/skills">{<button onClick={toggleClass}><b>Skills</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName={selected ? "nav-link" : "nav-link active"} aria-current="page" to="/experience">{<button onClick={toggleClass}><b>Experience</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName={selected ? "nav-link" : "nav-link active"} aria-current="page" to="/blogs">{<button onClick={toggleClass}><b>Blogs</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName={selected ? "nav-link" : "nav-link active"} aria-current="page" to="/contactme">{<button onClick={toggleClass}><b>Contact Me</b></button>}</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
