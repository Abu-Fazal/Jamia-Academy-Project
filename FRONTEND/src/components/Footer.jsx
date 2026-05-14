import "../style/footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

import {
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

import logo from "../assets/logo/jamia-Logo.png";

import msme from "../assets/logo/logo1.jpeg";
import mole from "../assets/logo/logo2.jpeg";
import skillIndia from "../assets/logo/logo3.jpeg";
import niti from "../assets/logo/logo4.jpeg";
import nielit from "../assets/logo/logo5.jpeg";

const Navbar = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-brand">
          <img src={logo} alt="Jamia Academy" className="footer-logo" />

          <p className="footer-description">
            Empowering students with cutting-edge technology education.
            Building skills, innovation, and future-ready professionals.
          </p>

          <div className="footer-social">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* COURSES */}
        <div className="footer-links">
          <h3>Popular Courses</h3>

          <ul>
            <li><a href="#">Diploma in Data Analytics</a></li>
            <li><a href="#">Full Stack Web Development</a></li>
            <li><a href="#">Artificial Intelligence & ML</a></li>
            <li><a href="#">Graphic Design with AI</a></li>
            <li><a href="#">Tally Prime with GST</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact Info</h3>

          <div className="contact-item">
            <span className="contact-icon">
              <FiMapPin />
            </span>

            <p>
              A-29, 1st Floor, Above J&K Bank, Batla House Chowk,
              Jamia Nagar, Okhla, Delhi 110025
            </p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">
              <FiPhone />
            </span>

            <div>
              <p>+91 9621555551</p>
              <p>+91 1147586007</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">
              <FiMail />
            </span>

            <div>
              <p>jamiaacademyvcs@gmail.com</p>
              <p>info@jamiaacademy.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* POWERED BY */}
      <div className="powered-wrapper">

        <div className="powered-title">
          <h2>Powered By</h2>
          <span></span>
        </div>

        <div className="powered-grid">

          <div className="powered-card">
            <img src={msme} alt="MSME" />
            <p>MSME</p>
          </div>

          <div className="powered-card">
            <img src={mole} alt="MoLE" />
            <p>MoLE</p>
          </div>

          <div className="powered-card">
            <img src={skillIndia} alt="Skill India" />
            <p>Skill India</p>
          </div>

          <div className="powered-card">
            <img src={niti} alt="Niti Aayog" />
            <p>Niti Aayog</p>
          </div>

          <div className="powered-card">
            <img src={nielit} alt="NIELIT" />
            <p>NIELIT</p>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © 2026 Jamia Academy. All rights reserved. Official Website of Jamia Academy
        </p>
        <span>
          Made by Abu Fazal under the guidance of Mr Mohd Saad
        </span>
      </div>
    </footer>
  );
};

export default Navbar;