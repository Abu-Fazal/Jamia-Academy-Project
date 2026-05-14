import React from 'react';
import '../style/contact.css';
import { IoLocationSharp, IoCallSharp, IoMailSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-main-container">
        
        {/* Header Section */}
        <header className="contact-header-section">
          <h1 className="main-title">Get in <span className="highlight-text">Touch</span></h1>
          <p className="sub-text">Have questions about our courses or admissions? Reach out to our team.</p>
        </header>

        {/* Info Cards Container */}
        <div className="info-cards-stack">
          
          {/* Visit Us Card - Standard State */}
          <div className="contact-info-card">
            <div className="icon-wrapper">
              <IoLocationSharp />
            </div>
            <div className="text-details">
              <h4>Visit Us</h4>
              <p>A-29, 1st floor, Above J&K Bank, Batla House Chowk, Delhi 110025</p>
            </div>
          </div>

          {/* Call Us Card */}
          <div className="contact-info-card">
            <div className="icon-wrapper">
              <IoCallSharp />
            </div>
            <div className="text-details">
              <h4>Call Us</h4>
              <div className="links-group">
                <a href="tel:+919621555551">+91 9621555551</a>
                <a href="tel:+911147586007">+91 1147586007</a>
              </div>
            </div>
          </div>

          {/* Email Us Card */}
          <div className="contact-info-card">
            <div className="icon-wrapper">
              <IoMailSharp />
            </div>
            <div className="text-details">
              <h4>Email Us</h4>
              <div className="links-group">
                <a href="mailto:jamiaacademycs@gmail.com">jamiaacademycs@gmail.com</a>
                <a href="mailto:info@jamiaacademy.in">info@jamiaacademy.in</a>
              </div>
            </div>
          </div>

        </div>

        {/* Social Icons Section */}
        <footer className="social-links-footer">
          <h5>Follow Us</h5>
          <div className="social-button-row">
            <a href="#" className="social-circle"><FaFacebookF /></a>
            <a href="#" className="social-circle"><FaInstagram /></a>
            <a href="#" className="social-circle"><FaYoutube /></a>
            <a href="#" className="social-circle"><FaTwitter /></a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Contact;