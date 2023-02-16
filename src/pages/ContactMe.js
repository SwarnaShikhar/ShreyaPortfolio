import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { GrSend } from "react-icons/gr";
import { FiSend } from "react-icons/fi"

export default function ContactMe() {
  return (
    <div className="box">
      <Navbar />
      <div className="divmain">
        <div className="divl">
          <Card />
        </div>
        <div className="divr">
          <form
            action="https://formspree.io/f/xrgvpjno"
            method="POST"
            className="formbg">
            <div className="hey"><h5 id="change">Hey! you can contact me here..</h5></div>
            <div class="form-group row">
              <label for="inputName" id="size" class="col-sm-2 col-form-label">Your Name</label>
              <div class="col-sm-10">
                <input type="name" name="Name" class="form-control" id="inputName" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputEmail" id="size" class="col-sm-2 col-form-label">Email Addres</label>
              <div class="col-sm-10">
                <input type="mail" name="Email" class="form-control" id="inputEmail" />
              </div>
            </div>
            <div class="form-group row">
              <label for="numEmail" id="size" class="col-sm-2 col-form-label">Your Phone No:</label>
              <div class="col-sm-10">
                <input type="text" name="number" class="form-control" id="inputNum" />
              </div>
            </div>
            <div class="form-group row">
              <label for="exampleFormControlTextarea1" id="size" class="col-sm-2 col-form-label">Your Message</label>
              <div class="col-sm-10">
                <textarea
                  name="message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="subm">

              <button
                type="submit"
                id="submit"
                value="send"
                className="btn btn-primary subbtn">
                <FiSend id="id-sign" />
                Send
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
