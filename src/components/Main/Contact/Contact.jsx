import React, { useState } from "react";
import "./styles/contact.scss";
import axios from "axios";
import "../../../assets/SchoolActivites/Holi/holi1.jpeg";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
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
  const formSubmit = async (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        "https://school-backend-production.up.railway.app/contact",
        requestOptions
      );
      if (response.ok) {
        // Handle successful response
        alert("Successfully submitted");
        setData({ name: "", phoneNumber: "", email: "", message: "" });
      } else {
        // Handle API response error
        const errorData = await response.json();
        alert(`API Error: ${errorData.message}`);
      }
    } catch (error) {
      // Handle network error or exception
      alert(`Server Error: ${error.message}`);
    }
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
              Barka Gaon, New pul Ara buxar road
            </p>

            <p className="text">
              Arrah, Bihar-802301
            </p>

            <p className="text">Ph: +91 7870613465 / 6206282610</p>

            <p className="text">E-Mail: snpublicschool2020@gmail.com</p>
          </div>
        </div>

        <div className="apply-box">
          <div className="form-container">
            <div className="socialmedia">
              <h1 className="follow">Send us a message</h1>
            </div>
            <div className="form-control">
              <label forhtml="full-name">Full Name</label>
              <input
                id="full-name"
                name="name"
                placeholder="Enter Full Name"
                value={data.name}
                onChange={InputEvent}
              />
            </div>
            <div className="form-control">
              <label forhtml="phone">Phone</label>
              <input
                type="number"
                id="phone"
                name="phoneNumber"
                placeholder="Enter phone"
                value={data.phoneNumber}
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
                name="message"
                rows="4"
                cols="50"
                placeholder="Enter Message"
                value={data.message}
                onChange={InputEvent}
              ></textarea>
            </div>
            <div className="button-container">
              <button type="submit" onClick={formSubmit}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 

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
        <form method="post" action="https://script.google.com/macros/s/AKfycbwnq__2HaFbA_Gb6LxOThLMeCgJ3u6woxRXscAUT8BXKdmlTzwPv45jTHUz4Vu5e1SqrQ/exec" name="contactform" id="contactform">
          <div className="form-control">
          


            <label forhtml="full-name">Full Name</label>
            <input
             type="text"
             name="name"
             placeholder="fullname"
             id="name"
            />
          </div>
          <div className="form-control">
            <label forhtml="phone">Phone</label>
            <input
            name="email"
              type="email"
              id="email"
             
              placeholder="Email"
             
            />
          </div>
          <div className="form-control">
            <label forhtml="email">Email</label>
            <input
            name="number"
              type="number"
              id="phone"
             
              placeholder="Phone"
            />
          </div>
          <div className="textarea-control">
            <label forhtml="message">Message</label>
            <textarea
              type="submit"
             name="message"
             placeholder="Message"
             id="comments"
            ></textarea>
          </div>
          <div className="button-container">
            <input type="submit" value="send message" className="button-container" id="submit"/>
        </div>
          </form>
        </div>
        
      </div>
    </div> */}
    </>
  );
};
export default Contact;
