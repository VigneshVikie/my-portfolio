import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-header">
        <h1>Contact</h1>
        <h3>Don't be shy! Hit me up! 👇</h3>
      </div>
      <div className="contact-icons">
        <div className="contact-info">
          <div className="contact-icon">
            <FaMapLocationDot />
          </div>
          <div className="content">
            <h3>Location</h3>
            <p>Chennai, India.</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-icon">
            <BiLogoGmail />
          </div>
          <div className="content">
            <h3>Mail</h3>
            <a href="vikieatwork@gmail.com">vikieatwork@gmail.com</a>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-icon">
            <IoCall />
          </div>
          <div className="content">
            <h3>Mobile</h3>
            <a href="tel:+91 8608880233">+91 8608880233</a>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Contact;
