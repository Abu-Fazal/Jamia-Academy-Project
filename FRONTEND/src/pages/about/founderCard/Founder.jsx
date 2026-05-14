import React, { useState } from 'react';
import './founder.css';

const FounderCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="founder-card">
      <div className="founder-card__img-wrapper">
        <img 
            src="https://www.jamiaacademy.in/gallery/Qasimsir1.png" 
            alt="Dr. Qasim Chaudhary" 
            onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerHTML='QC'; }}
        />
      </div>
      <div className="founder-card__content">
        <span className="founder-card__label">Founder and CMD</span>
        <h3 className="founder-card__name">Dr. Qasim Chaudhary</h3>
        <div className="founder-card__text" style={{ maxHeight: isExpanded ? '1000px' : '120px' }}>
          <p>Dr. Qasim Chaudhary is a distinguished academic leader, education strategist, and social-impact entrepreneur with a strong commitment to building inclusive, technology-driven learning ecosystems. He holds a Doctorate (Ph.D.) and MBA from the University of Lucknow, and a BBA from Sherwood Group of Colleges, Nainital, combining academic research excellence with managerial and institutional leadership expertise.</p>
          <div style={{ filter: isExpanded ? 'none' : 'blur(4px)', opacity: isExpanded ? 1 : 0.5 }}>
            <p>As the Founder and Director of Jamia Academy Group of Institutions, Dr. Chaudhary oversees multiple academic branches and a school, guiding the organization with a long-term vision focused on scalability, quality assurance, and social impact.</p>
            <p>In addition to institutional leadership, Dr. Chaudhary actively contributes to public education governance as a Member of the Uttar Pradesh Government School Management Committee.</p>
          </div>
        </div>
        <button className="about-section__btn" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'See less...' : 'See more...'}
        </button>
      </div>
    </div>
  );
};

export default FounderCard;