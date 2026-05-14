import React, { useState } from 'react';
import '../founderCard/Founder';
import './coFunder.css';

const CoFounderCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="co-founder-card">
      <div className="founder-card__img-wrapper">
        <img 
            src="https://www.jamiaacademy.in/gallery/saba1.jpeg" 
            alt="Dr. Saba Rizwi" 
            onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerHTML='SR'; }}
        />
      </div>
      <div className="founder-card__content">
        <span className="founder-card__label">Co-Founder and MD</span>
        <h3 className="founder-card__name">Dr. Saba Rizwi</h3>
        <div className="founder-card__text" style={{ maxHeight: isExpanded ? '1000px' : '120px' }}>
          <p>Education is much more than books and exams. It is about shaping minds, building character, and preparing every individual to step into life with confidence, purpose, and courage.</p>
          <div style={{ filter: isExpanded ? 'none' : 'blur(4px)', opacity: isExpanded ? 1 : 0.5 }}>
            <p>My vision has always been to create a space where curiosity is celebrated, questions are welcomed, and growth is encouraged at every step. I truly believe that every learner carries immense potential.</p>
            <p>My goal is to help students discover their strengths, embrace challenges, and develop the skills and values that will guide them throughout life.</p>
          </div>
        </div>
        <button className="about-section__btn" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'See less...' : 'See more...'}
        </button>
      </div>
    </div>
  );
};

export default CoFounderCard;