import React from 'react';
import { coursesImages } from '../../data/ImagesData';

const CoursesImages = () => {
    return (
        <div className="gallery-grid">
            {coursesImages.map((img, index) => (
                <div 
                    className="image-card" 
                    key={img.id} 
                    style={{ animationDelay: `${index * 0.05}s` }}
                >
                    <div className="image-wrapper">
                        <img src={img.src} alt={img.alt} />
                        <div className="overlay">
                            {/* <span className="zoom-icon">🎓</span> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CoursesImages;