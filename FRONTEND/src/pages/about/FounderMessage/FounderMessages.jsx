import React from 'react';
import './founderMessage.css';

const FounderMessage = () => {
  return (
    <section className="founder-message">
      <h2 className="founder-message__title">Founder / CMD's Message</h2>
      <div className="founder-message__panel">
        <div className="founder-message__content">
          <p>At Jamia Academy Group of Institutions, we believe that accessible, technology-driven education is the foundation of social progress and national development.</p>
          <p>With a strong emphasis on Computer Science, Information Technology, and Creative Digital disciplines, Jamia Academy is committed to bridging the gap between academic knowledge and industry expectations.</p>
          <p>Beyond institutional growth, our vision is rooted in nation-building and social responsibility.</p>
        </div>
        <div className="founder-message__signature">
          <h4>Dr. Qasim Chaudhary</h4>
          <p>Founder and CMD <br/> Jamia Academy Group of Institutions</p>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;