import React from 'react';
import './vision.css';

const VisionMission = () => {
  return (
    <div className="vision-mission-grid">
      <div className="vm-card">
        <div className="vm-card__icon" style={{ background: 'rgba(45, 212, 191, 0.15)' }}>🎯</div>
        <h3 className="vm-card__title">Our Vision</h3>
        <p className="vm-card__text">Empowering Minds. Advancing Technology. Building the Nation.<br/><br/> To emerge as a nationally recognized education group that empowers individuals through technology-driven education, enabling inclusive growth.</p>
      </div>
      
      <div className="vm-card">
        <div className="vm-card__icon" style={{ background: 'rgba(168, 85, 247, 0.15)' }}>🎓</div>
        <h3 className="vm-card__title">Our Mission</h3>
        <ul className="vm-card__text">
          <li>Provide high-quality education in CS and IT.</li>
          <li>Make affordable education available to marginalized communities.</li>
          <li>Expand Jamia Academy's presence globally.</li>
        </ul>
      </div>

      <div className="vm-card">
        <div className="vm-card__icon" style={{ background: 'rgba(34, 197, 94, 0.15)' }}>💚</div>
        <h3 className="vm-card__title">Our Commitment</h3>
        <p className="vm-card__text">At Jamia Academy, we are committed to building institutions that educate with purpose, innovate with responsibility, and grow with integrity.</p>
      </div>
    </div>
  );
};

export default VisionMission;