import React, { useState, useRef } from 'react';
import './aboutSection.css';

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  const toggleExpand = () => {
    if (isExpanded) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="about-section" ref={sectionRef}>
      <h1 className='heading'>About <span>Us</span></h1>
      <h2 className="about-section__title">About Jamia Academy</h2>
      <div className={`about-section__content ${isExpanded ? 'about-section__content--expanded' : 'about-section__content--collapsed'}`}>
        <p>Jamia Academy, established in 2022, is a future-focused education group founded with the objective of expanding access to high-quality, technology-driven education aligned with global standards. Strategically located in close proximity to <strong>Jamia Millia Islamia University,</strong> the Academy benefits from a rich academic environment that reflects intellectual depth, research orientation, and a strong educational legacy.</p>
        <p>The institution is led by Dr. Qasim Chaudhary, Founder and Director of Jamia Academy Group of Institutions, a distinguished academic leader, education strategist, and social-impact entrepreneur. Under his leadership, Jamia Academy has grown into a multi-branch education group operating academic institutions and a school, guided by a long-term vision of scalability, quality assurance, and inclusive growth.</p>
        <p>A key strength of Jamia Academy lies in its academically strong and research-oriented faculty, which includes Ph.D. alumni of Jamia Millia Islamia University. This ensures that teaching methodologies are grounded in conceptual clarity, academic discipline, and outcome-based learning rather than short-term skill training alone.</p>
        
        <div style={{ filter: isExpanded ? 'none' : 'blur(4px)', transition: '0.4s' }}>
          <p>Jamia Academy places strategic emphasis on Computer Science, Information Technology, and Creative Digital disciplines such as Graphics Design and Animation, aligning its academic offerings with global workforce trends and the evolving digital economy.</p>
          <p>Since its establishment in 2022, Jamia Academy has remained committed to affordable and accessible education, particularly for students from economically weaker, marginalized, and underrepresented communities.</p>
          <p>Beyond academic delivery, Jamia Academy views education as a catalyst for social mobility, national development, and economic resilience.</p>
          <p>Guided by the vision "Empowering Minds. Advancing Technology. Building the Nation," Jamia Academy aspires to emerge as a nationally and globally recognized education group.</p>
          <p>Jamia Academy continues to evolve as more than an educational institution - it is a platform for knowledge, innovation, and inclusive progress.</p>
        </div>

        {!isExpanded && <div className="about-section__blur"></div>}
      </div>
      <button className="about-section__btn" onClick={toggleExpand}>
        {isExpanded ? 'See less...' : 'See more...'}
      </button>
    </section>
  );
};

export default AboutSection;