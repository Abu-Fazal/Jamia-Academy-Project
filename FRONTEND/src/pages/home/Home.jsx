import React from 'react';
import '../../style/home.css';
import { HiOutlineCpuChip } from "react-icons/hi2";
import Empower from './Empower';

const Home = () => {
  const empower = () => {
    console.log("button clicked");
    const section = document.getElementById("empower-section");

  section.scrollIntoView({
    behavior: "smooth"
  });
    
  }
  return (
    <>
    <section className="hero-section">
      <div className="hero-container">
        
        {/* 1. Top Blinking Heading */}
        <div className="hero-top-notice">
          <p>Orphan Children Get 100% FREE Professional & Technical Courses</p>
        </div>

        {/* 2. Badge with Expanding Ripple Dot */}
        <div className="mission-badge">
          <div className="dot-container">
            <span className="dot-main"></span>
            <span className="dot-ripple"></span>
          </div>
          <span className="badge-text">DIGITAL EMPOWERMENT MISSION</span>
        </div>

        {/* 3. Main Sharp Heading */}
        
        <h1 className="hero-title">
          JAMIA ACADEMY
        </h1>

     

        {/* 4. Subtitle (Single Line) */}
        <p className="hero-subtitle">
          A Future-Focused Institution Driving Technology, Talent & Transformation
        </p>

        {/* 5. Info Text */}
        <p className="hero-info">
          (ISO Certified & Govt. Approved Institute)
        </p>

        {/* 6. Explorer Button */}
        <div className="hero-action">
          <button className="explore-btn" onClick={empower}>
            <HiOutlineCpuChip className="btn-icon" />
            <span>Explore Courses</span>
          </button>
        </div>

      </div>
    </section>
    <Empower />
    </>
  );
};

export default Home;