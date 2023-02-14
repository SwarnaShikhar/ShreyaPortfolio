import React from 'react'
import Navbar from '../components/Navbar'
import Card from "../components/Card"

export default function Experience() {
  return (
    <div className='box'>
      <Navbar />
      <div className='div-top'>
        <div className='left-div'>
          <Card />
        </div>
        <div className='right-div'>
          <div className="exp">
            <p>1.Designed for Start-up 2023</p>
            <li>Designed logo , web site and a mobile application for a startup of Boston
              named 'pitchers'</li>
          </div>
          <div className="exp">
            <p>2.Designer of GDSC WOW & member of GDSC WOW creative team,2k23</p>
            <li>Designed all the logo, posters and works on color panel</li>
          </div>
          <div className="exp">
            <p>3.Design Executive at GDSC-SIT 2k22-2k23</p>
            <li>Design all the posters and websites</li>
          </div>
          <div className="exp">
            <p>4.Designer at Devfest Siliguri 2k22 of GDG Siliguri</p>
            <li>Designed all the required things like websites,id-cards,posters,hoardings and all</li>
          </div>
          <div className="exp">
            <p>5.Designed Robocar in Techfest 2k21</p>
            <li>Designed Robocars as project model in Techfest 2k21 in SIT</li>
          </div>
          <div className="exp">
            <p>6.Cloud Facilator of GDSC SIT 2k22 and 2k21</p>
            <li>Leaded 500+ students to learn google cloud and more than 400 students have fully completed all milestones under my facilation</li>
          </div>
          <div className="exp">
            <p>7.Core team member of Girls Script Siliguri 2k21</p>
            <li>I was a part of Out-reachy team where we gained 40% follers and members.</li>
          </div>
          <div className="exp">
            <p>8.Core team member of Hack Club Siliguri 2k20</p>
            <li>We took sessions,webiners and organized hackathons</li>
          </div>
          <div className="exp">
            <p>9.Chapter leader of Skillenza SIT at 2k20</p>
            <li>I created a tech team and organized sessions,bootcamps</li>
          </div>
        </div>
      </div>
    </div>
  )
}
