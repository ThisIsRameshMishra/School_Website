import React, { useState } from "react";
import "./styles/contact.css";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: data.fullname,
      phone: data.phonenumber,
      email: data.email,
      message: data.msg,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/register", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
	  
    console.log(JSON.stringify(data.fullname));
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My phone number is ${data.phonenumber}. My email is ${data.email}. I want to say ${data.msg}  `
    );
    setData({ fullname: "", phonenumber: "", email: "", msg: "" });
  };
  return (
    <>
      <div className="wholecontact">
        <div className="contactpage">
          <div className="contactheading">
            <p className="contacttext">CONTACT US</p>
            <div className="border"></div>
            <p className="schoolname">SN PUBLIC SCHOOL</p>
          </div>
        </div>
        <div className="reachus">
          <span className="addressheading">Reach Us</span>
          <div className="reachborder"></div>
          <div className="Add">
            <p className="text">
              Sy. No. 58 & 67, Kanthaiahana Palya Pipeline Road,
            </p>

            <p className="text">
              Kaggalipura Kanakapura Road, Bangalore-560116
            </p>

            <p className="text">Ph: +91 7338522728 / 7899762728</p>

            <p className="text">E-Mail: davbangalore@gmail.com</p>
          </div>
        </div>

        <div className="apply-box">
          <div className="form-container">
            <div className="form-control">
              <label forhtml="full-name">Full Name</label>
              <input
                id="full-name"
                name="fullname"
                placeholder="Enter Full Name"
                value={data.fullname}
                onChange={InputEvent}
              />
            </div>
            <div className="form-control">
              <label forhtml="phone">Phone</label>
              <input
                type="number"
                id="phone"
                name="phonenumber"
                placeholder="Enter phone"
                value={data.phonenumber}
                onChange={InputEvent}
              />
            </div>
            <div className="form-control">
              <label forhtml="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={data.email}
                onChange={InputEvent}
              />
            </div>
            <div className="textarea-control">
              <label forhtml="message">Message</label>
              <textarea
                id="message"
                name="msg"
                rows="4"
                cols="50"
                placeholder="Enter Message"
                value={data.msg}
                onChange={InputEvent}
              ></textarea>
            </div>
          </div>
          <div className="button-container">
            <button type="submit" onClick={formSubmit}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
