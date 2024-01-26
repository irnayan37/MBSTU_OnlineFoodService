// ContactPage.js

import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-text">
          We'd love to hear from you! Please fill out the form below, and we'll
          get back to you as soon as possible.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button type="submit" className="contact-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
