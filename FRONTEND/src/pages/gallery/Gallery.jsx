import React, { useState } from 'react';
import AllImages from './AllImages';
import CoursesImages from './CourseImages';
import ClassroomImages from './ClassRoomImages';
import EventsImages from './EventImages';
import '../../style/gallery.css';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const renderComponent = () => {
        switch (activeFilter) {
            case "courses": return <CoursesImages />;
            case "classroom": return <ClassroomImages />;
            case "events": return <EventsImages />;
            default: return <AllImages />;
        }
    };

    return (
        <section className="gallery-section">
            <div className="gallery-container">
                <div className="section-header">
                    <h2 className="gallery-title">Our <span>Gallery</span></h2>
                    <p className="gallery-subtitle">Captured moments at Jamia Academy</p>
                </div>
                
                <div className="filter-tabs">
                    {["all", "courses", "classroom", "events"].map((tab) => (
                        <button 
                            key={tab}
                            className={`filter-btn ${activeFilter === tab ? 'active' : ''}`}
                            onClick={() => setActiveFilter(tab)}
                        >
                            {tab.toUpperCase()}
                        </button>
                    ))}
                </div>

                <div className="gallery-content">
                    {renderComponent()}
                </div>
            </div>
        </section>
    );
};

export default Gallery;