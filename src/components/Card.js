import React from "react";
import frame from "../images/Frame.png";
import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Card() {
  return (
    <div>
      <div className="card" id="card-p">
        <img id="frame" src={frame} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title text-center">{<b>Shreya Roy</b>}</h5>
          <p className="card-text text-center">UX-UI Designer</p>
          <a href="https://drive.google.com/file/d/18OeiShEfppiBuDvxOOO7MJimWRokP-FG/view?usp=sharing"><button id="card-res" className='div-b-a-b-but resbtn'><b>See my resume</b></button></a>
          <div className="btn-card justify-content-around">
            <a href="https://www.behance.net/shreyaroy010">
              <FaBehanceSquare className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/shreya-roy-3147881b7/">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://medium.com/@royshreya538">
              <SiMedium className="icon" />
            </a>
            <a href="https://twitter.com/ShreyaR19458856">
              <AiFillTwitterCircle className="icon" />
            </a>
            <a href="https://github.com/Shreya010tech">
              <FaGithub className="icon" />
            </a>
            <a href="https://www.instagram.com/i_am_shreya_roy/">
              {" "}
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
