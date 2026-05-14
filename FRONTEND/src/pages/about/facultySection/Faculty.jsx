import React from 'react';
import './faculty.css';

const facultyData = [
  { id: 1, name: "Dr. Qasim Chaudhary", role: "Founder and CMD", qualifications: ["Ph.D HR Analytics (JMI)", "MBA (AKTU)", "15 Years Exp"], image: "https://www.jamiaacademy.in/gallery/qasim.jpg", initials: "QC" },
  { id: 2, name: "Dr. Saba Rizwi", role: "Co-founder/Director", qualifications: ["Ph.D in EdTech & AI (JMI)", "8 Years Exp"], image: "https://www.jamiaacademy.in/gallery/saba.jpg", initials: "SR" },
  { id: 3, name: "Mr. Mohd Saad", role: "Faculty", qualifications: ["MCA (JMI)", "M.Sc (Maths)", "5+ Years Exp"], image: "https://www.jamiaacademy.in/gallery/saad.jpeg", initials: "MS" },
  { id: 4, name: "Mr. Shahid Khan", role: "Faculty", qualifications: ["Diploma Animation (MAAC)", "3D Designer", "8 Years Exp"], image: "https://www.jamiaacademy.in/gallery/shahid.jpg", initials: "SK" }
];

const FacultySection = () => {
  return (
    <section className="faculty-section">
      <h2 className="faculty-section__title">Our <span>Faculties</span></h2>
      <div className="faculty-grid">
        {facultyData.map((f, index) => (
          <div className="faculty-card" key={f.id} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="faculty-card__img-container">
               <img 
                className="faculty-card__img" 
                src={f.image} 
                alt={f.name} 
                onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerHTML=`<div class="faculty-placeholder">${f.initials}</div>`; }}
               />
            </div>
            <h3 className="faculty-card__name">{f.name}</h3>
            <p className="faculty-card__role">{f.role}</p>
            <ul className="faculty-card__quals">
              {f.qualifications.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultySection;