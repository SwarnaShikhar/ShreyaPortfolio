import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
// import image5 from "../images/image5.png";
import hmct from "../images/test.png";
import dp from "../images/swarna.png";

export default function Projects() {
  return (
    <div className="box">
      <Navbar />
      <div className="cart">
        <div className="card-use">
          {<Card />}
        </div>
        <div className="card-work">
          <div className="card-work-1">
            <a href="https://www.behance.net/gallery/147846557/Body-Care-app-design-Inspiration-work-2"><img id="image" src={image4} alt="" /></a>
            <a href="https://www.behance.net/gallery/146315995/Escape-Online-booking-app-design"><img id="image" src={image2} alt="" /></a>
          </div>
          <div className="card-work-2">
            <a href="https://www.behance.net/gallery/125027349/Tea-subscription-Service"><img id="imgg" src={image1} alt="" /></a>
            <a href="https://www.behance.net/gallery/159741337/Portrait-Design"><img id="imgg" src={dp} alt="" /></a>
          </div>
          <div className="card-work-3">
            <a href="https://www.behance.net/gallery/147845305/Fit-app-Inspiration-work"><img id="image" src={image3} alt="" /></a>
            <a href="https://www.behance.net/gallery/163709627/Hotel-Management-Site"><img id="image" src={hmct} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}


/* <div className="p-use">
          <div className="project-1 col-md-4">
            <a href="https://www.behance.net/gallery/125027349/Tea-subscription-Service">
              <img id="image" src={image1} alt="" />
            </a>
            <a href="https://www.behance.net/gallery/147846557/Body-Care-app-design-Inspiration-work-2">
              <img id="image" src={image4} alt="" />
            </a>
          </div>
          <div className="project-2 col-md-4">
            <a href="https://www.behance.net/gallery/146315995/Escape-Online-booking-app-design">
              <img id="image" src={image2} alt="" />
            </a>
            <a href="https://www.behance.net/gallery/147845305/Fit-app-Inspiration-work">
              <img id="image" src={image3} alt="" />
            </a>
          </div>
          <div className="project-2 col-md-4">
            <a href="https://www.behance.net/gallery/163709627/Hotel-Management-Site">
              <img id="image" src={hmct} alt="" />
            </a>
            <a href="https://www.behance.net/gallery/159741337/Portrait-Design">
              <img id="image" src={dp} alt="" />
            </a>
          </div>
        </div> */