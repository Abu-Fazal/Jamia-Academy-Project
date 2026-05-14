import React from 'react';
import '../visionSection/vision.css';

const WhyChooseUs = () => {
  return (
    <div className="vision-mission-grid" style={{ marginBottom: '80px' }}>
      <div className="vm-card">
        <div className="vm-card__icon" style={{ background: 'rgba(59, 130, 246, 0.15)' }}>🛡️</div>
        <h3 className="vm-card__title">ISO with IAF Certified</h3>
        <p className="vm-card__text">As an ISO and IAF Certified Academy, Jamia Academy stands for quality, credibility, and excellence in education.</p>
      </div>
      
      <div className="vm-card">
        <div className="vm-card__icon" style={{ background: 'rgba(168, 85, 247, 0.15)' }}>👥</div>
        <h3 className="vm-card__title">Expert Faculties</h3>
        <p className="vm-card__text">Our academy has a team of expert faculty with strong academic backgrounds and industry experience.</p>
      </div>

      <div className="vm-card">
        <div className="vm-card__icon" style={{ background: 'rgba(34, 197, 94, 0.15)' }}>🏆</div>
        <h3 className="vm-card__title">Career Support</h3>
        <p className="vm-card__text">We offer comprehensive career counseling and placement assistance, including resume building and job guidance.</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;