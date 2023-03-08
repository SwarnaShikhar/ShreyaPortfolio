import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import devfest from "../images/devfest.jpg";
import survey from "../images/survey.png";
import UX from "../images/UX.webp";
import money from "../images/Money.gif";

import "../pages/Blogs.css"

export default function Blogs() {
  return (
    <div className="box">
      <Navbar />
      <div className="div-p">
        <div className="div-c-left">
          <Card />
        </div>
        <div className="div-c-right">
          <div>
            <h5 id="wr"><b>Blogs that I have written</b></h5>
          </div>
          <div className="b-w">
            <div className="card" id="card">
              <img src={devfest} className="card-img-top" id="img" alt="" />
              <div className="card-body">
                <h5 className="card-title" id="card-title">
                  <b>Designs for Devfest Siliguri 2k22</b>
                </h5>
                <p className="card-text" id="card-text">
                  DevFest is an annual decentralized tech conference hosted by
                  the Google Developer Groups (GDG) community.Each DevFest event is crafted by...
                </p>
                <a href="https://medium.com/@royshreya538/designs-for-devfest-siliguri-2k22-de8d49cbf509">
                  <button class="btn btn-primary" id="continue">
                    Continue Reading
                  </button>
                </a>
              </div>
            </div>
            <div className="card" id="card">
              <img src={survey} className="card-img-top" id="img" alt="" />
              <div className="card-body">
                <h5 className="card-title" id="card-title">
                  <b>Survey on Tea Consumption- UX case study with UI</b>
                </h5>
                <p className="card-text" id="card-text">
                  I joined college one year ago and I got to know about UX-UI
                  design from one of my friends...
                </p>
                <a href="https://medium.com/@royshreya538/survey-on-tea-consumption-ux-case-study-with-ui-34f970192084">
                  <button class="btn btn-primary" id="continue">
                    Continue Reading
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h5 id="wr"><b>Blogs that I have read and I like</b></h5>
          </div>
          <div className="b-i">
            <div className="card" id="card">
              <img src={money} className="card-img-top" id="img" alt="" />
              <div className="card-body">
                <h5 className="card-title" id="card-title">
                  <b>How to Earn Money in 2023 While Learning UI/UX Design</b>
                </h5>
                <p className="card-text" id="card-text">
                  The demand for professionals in the field of UI/UX design has
                  increased significantly in recent...
                </p>
                <a href="https://uxplanet.org/how-to-earn-money-in-2023-while-learning-ui-ux-design-e6b372758ad2">
                  <button class="btn btn-primary" id="continue">
                    Continue Reading
                  </button>
                </a>
              </div>
            </div>
            <div className="card" id="card">
              <img src={UX} className="card-img-top" id="img" alt="" />
              <div className="card-body">
                <h5 className="card-title" id="card-title">
                  <b>User Experience (UX) Design</b>
                </h5>
                <p className="card-text" id="card-text">
                  User experience (UX) design is the process design teams use to
                  create products that provide meaningful and relevant
                  experiences to users...
                </p>
                <a href="https://www.interaction-design.org/literature/topics/ux-design">
                  <button class="btn btn-primary" id="continue">
                    Continue Reading
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
