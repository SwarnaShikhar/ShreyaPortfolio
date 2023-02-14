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
            <a href="https://www.behance.net/gallery/125027349/Tea-subscription-Service"><img id="image" src={image1} alt="" /></a>
            <a href="https://www.behance.net/gallery/147846557/Body-Care-app-design-Inspiration-work-2"><img id="image" src={image4} alt="" /></a>
            {/* <img id="image" src={image5} alt="" /> */}
          </div>
          <div class="vl"></div>
          <div className='project-2 col-md-4'>
            <a href="https://www.behance.net/gallery/146315995/Escape-Online-booking-app-design"><img id="image" src={image2} alt="" /></a>
            <a href="https://www.behance.net/gallery/147845305/Fit-app-Inspiration-work"><img id="image" src={image3} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}



