import React from 'react'
import Navbar from '../components/Navbar'
import sapiens from "../images/sapiens.jpg"
import "../pages/AboutMe.css"

export default function AboutMe() {
  return (
    <div className='box'>
      <Navbar />
      <div className='div-b'>
        <div className="div-b-a">
        <div className='div-a'><h1>Hi, I am <b>Shreya</b></h1></div>
          <div className="div-b-a-a">
            
            &emsp;I'm UX-UI Designer and Product Designer from India, learning Illustration. I am trying to understand how users and technology communicate with each other and focus on attractive and user-friendly designing.
          </div>
          <div className="div-b-a-b" id='resumebtn'>
            <a href="https://drive.google.com/file/d/18OeiShEfppiBuDvxOOO7MJimWRokP-FG/view?usp=sharing"><button className='div-b-a-b-but p-2'><b>See my resume</b></button></a>
          </div>
        </div>
        <div className="div-b-b">
          <img id="sapiens" src={sapiens} alt="" />
        </div>
      </div>
      <div className='div-c'>
        <b>What I do</b>
        <div className='ell'></div>
      </div>
      <div className='div-d'>
        <p>UX Design</p>
        <p>Product Designing</p>
      </div>
    </div>
  )
}