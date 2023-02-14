import React from 'react'
import Navbar from '../components/Navbar'
import Card from "../components/Card"
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";


export default function Projects() {
  return (
    <div className='box'>
      <Navbar />
      <div className='cart'>
        <div className='card-use'>
          {<Card />}
        </div>
        <div className='p-use'>
          <div className='project-1 col-md-4'>
            <img id="image" src={image1} alt="" />
            <img id="image" src={image4} alt="" />
            {/* <img id="image" src={image5} alt="" /> */}
          </div>
          <div class="vl"></div>
          <div className='project-2 col-md-4'>
            <img id="image" src={image2} alt="" />
            <img id="image" src={image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}



