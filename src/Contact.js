import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <Nav />
      <div className="container">
        <div className="form">
          <h1>Get In Touch</h1>
          <form>
              <div className="form-group">
                  <label htmlFor="">Your Name</label>
                  <input type="text" placeholder="Enter Name" autoComplete="off"/>
              </div>
              <div className="form-group">
                  <label htmlFor="">Email Address</label>
                  <input type="text" placeholder="Enter Email" autoComplete="off"/>
              </div>
              <div className="form-group">
                  <label htmlFor="">Write your message</label>
                  <textarea autoComplete="off"></textarea>
              </div>
          </form>
          <button>Send</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
