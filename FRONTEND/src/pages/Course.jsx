import React, { useState } from 'react';
import '../style/course.css';
import { courses } from '../data/CourseData';
import { Clock, X, BarChart2 } from 'lucide-react'; // BarChart2 icon signal ke liye

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section className="course-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span>Courses</span></h2>
          <p className="section-subtitle">Master the tools of tomorrow.</p>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`course-card ${selectedCourse?.id === course.id ? 'active-card' : ''}`}
            >
              <div className="card-padding">
                <span className="category-tag">{course.category}</span>
                <h3 className="course-name">{course.title}</h3>
                <p className="course-desc">{course.description}</p>
                
                <div className="course-footer">
                  <div className="duration">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div 
                    className="level-badge" 
                    style={{ backgroundColor: `${course.levelColor}20`, color: course.levelColor }}
                  >
                    <BarChart2 size={14} className="level-icon" />
                    {course.level}
                  </div>
                </div>
              </div>

              {/* View Details Button - Image ke hisaab se bottom pe fixed */}
              <button 
                className="view-details-btn"
                onClick={() => setSelectedCourse(course)}
              >
                VIEW DETAILS
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* --- Course Details Modal --- */}
      {selectedCourse && (
        <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedCourse(null)}>
              <X size={24} />
            </button>
            <h2 className="modal-title">{selectedCourse.title}</h2>
            <p className="modal-category">Category: <span>{selectedCourse.category}</span></p>
            <div className="modal-meta">
              <p><strong>Duration:</strong> {selectedCourse.duration}</p>
              <p><strong>Level:</strong> {selectedCourse.level}</p>
            </div>
            <div className="modal-body">
              <h3>Course Overview:</h3>
              <p>{selectedCourse.description}</p>
              <h3>What you will learn:</h3>
              <ul className="learn-list">
                <li>Professional Training & Projects</li>
                <li>Industry-standard Tools Mastery</li>
                <li>Certification upon completion</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Course;