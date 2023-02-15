import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { GrSend } from "react-icons/gr";

export default function ContactMe() {
  return (
    <div className="box">
      <Navbar />
      <div className="divmain">
        <div className="divl">
          <Card />
        </div>
        <div className="divr">
          <h5>Hey! you can contact me here..</h5>
          <form
            action="https://formspree.io/f/xrgvpjno"
            method="POST"
            className="formbg"
          >
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                name="Name"
                className="form-control"
                id="exampleInputName"
              />
              <div id="yourName" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="Email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label for="exampleInputNumber" className="form-label">
                Your Phone Number
              </label>
              <input
                type="text"
                name="number"
                className="form-control"
                id="exampleInputNumber"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Your Message</label>
              <textarea
                name="message"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              id="submit"
              value="send"
              className="btn btn-primary subbtn"
            >
              <GrSend style={{ color: "white" }} />
              &emsp;Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
