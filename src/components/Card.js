import React from "react";
import frame from "../images/Frame.png";
import be from "../images/be.png"
import li from "../images/li.png"
import med from "../images/med.png"
import tw from "../images/tw.png"
import gt from "../images/gt.png"
import ins from "../images/in.png";

import "../components/Card.css"

export default function Card() {
  return (
    <div className="card-bg">
      <div className="card" id="card-p">
        <img id="frame" src={frame} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title text-center">{<b>Shreya Roy</b>}</h5>
          <p className="card-text text-center">UX-UI Designer</p>
          <a id="resu" href="https://drive.google.com/file/d/18OeiShEfppiBuDvxOOO7MJimWRokP-FG/view?usp=sharing"><button  className='div-b-a-b-res resbtn'><b>See my resume</b></button></a>
          <div className="btn-card justify-content-around">
            <a  href="https://www.behance.net/shreyaroy010"><img className="icon" src={be} alt="" /></a>
            <a  href="https://www.linkedin.com/in/shreya-roy-3147881b7/"><img className="icon" src={li} alt="" /></a>
            <a  href="https://medium.com/@royshreya538"><img className="icon" src={med} alt="" /></a>
            <a  href="https://twitter.com/ShreyaR19458856"><img className="icon" src={tw} alt="" /></a>
            <a  href="https://github.com/Shreya010tech"><img className="icon" src={gt} alt="" /></a>
            <a  href="https://www.instagram.com/i_am_shreya_roy/"><img className="icon" src={ins} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
