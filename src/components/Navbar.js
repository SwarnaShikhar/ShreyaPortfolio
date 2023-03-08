import React from 'react'
import { NavLink } from 'react-router-dom'
import "../components/Nav.css";

export default function Navbar() {
  

  function toggleAbout() {
    document.getElementById("about").style.color= "white"
    document.getElementById("about").style.fontSize= "18px"
  }

  function toggleProjects () {
    document.getElementById("projects").style.color= "white"
    document.getElementById("projects").style.fontSize= "18px"
  }

  function toggleSkills () {
    document.getElementById("skills").style.color= "white"
    document.getElementById("skills").style.fontSize= "18px"
  }

  function toggleExp () {
    document.getElementById("exp").style.color= "white"
    document.getElementById("exp").style.fontSize= "18px"
  }
  

  function toggleBlogs () {
    document.getElementById("blogs").style.color= "white"
    document.getElementById("blogs").style.fontSize= "18px"
  }

  function toggleContact () {
    document.getElementById("contact").style.color= "white"
    document.getElementById("contact").style.fontSize= "18px"
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
                <NavLink exact activeClassName="nav-link" aria-current="page" to="/">{<button onClick={toggleAbout}><b id='about'>About Me</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="nav-link" aria-current="page" to="/project">{<button onClick={toggleProjects}><b id='projects'>Projects</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="nav-link" aria-current="page" to="/skills">{<button onClick={toggleSkills}><b id='skills'>Skills</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="nav-link" aria-current="page" to="/experience">{<button onClick={toggleExp}><b id='exp'>Experience</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="nav-link" aria-current="page" to="/blogs">{<button  onClick={toggleBlogs}><b id='blogs'>Blogs</b></button>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="nav-link" aria-current="page" to="/contactme">{<button onClick={toggleContact}><b id='contact'>Contact Me</b></button>}</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
