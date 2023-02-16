import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import book from "../images/book.png";

export default function Skills() {
  return (
    <div className="box">
      <Navbar />
      <div className="div0">
        <div className="div1">
          <Card />
        </div>
        <div className="div2">
          <div className="div2-1">
            <div className="skill">
              <span className="skill-show">{<b>UX Design</b>}</span>
              <span className="skill-show">{<b>UX Research</b>}</span>
              <span className="skill-show">{<b>UI Design</b>}</span>
              <span className="skill-show">{<b>Figma Prototype</b>}</span>
            </div>
            <div className="skill">
              <span className="skill-show">{<b>Product Vision</b>}</span>
              <span className="skill-show">{<b>Wireframing</b>}</span>
              <span className="skill-show">{<b>Figma</b>}</span>
              <span className="skill-show">{<b>Market Research</b>}</span>
            </div>
            <div className="skill">
              <span className="skill-show">{<b>Visual Designing</b>}</span>
              <span className="skill-show">{<b>Prototyping</b>}</span>
              <span className="skill-show">{<b>3D Modeling</b>}</span>
              <span className="skill-show">{<b>Accessbility</b>}</span>
            </div>
            <div className="skill">
              <span className="skill-show">{<b>Product Designing</b>}</span>
              <span className="skill-show">{<b>Usability Testing</b>}</span>
              <span className="skill-show">{<b>Interaction Design</b>}</span>
              <span className="skill-show">{<b>Illustration</b>}</span>
            </div>
          </div>
          <div className="div2-2">
            <div className="div2-2-2">
              <h1 className="text-center"><b>Education</b></h1>
              <div className='ell'></div>
              <div className="book">
                <img src={book} alt="" />
                <div className="edu">
                  <p>
                    <h4>2020-2024</h4>
                    <h2>Siliguri Institute of Technology</h2>
                    <h6>
                      Doing Batcheor of technology in Computer science and
                      technology
                    </h6>
                  </p>
                  <p>
                    <h4>2008-2020</h4>
                    <h2>Jalpaiguri Government Girl's High School</h2>
                    <h6>Have done my secondary and higher secondary education</h6>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
