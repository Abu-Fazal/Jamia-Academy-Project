import React from 'react';
import { classroomImages } from  '../../data/ImagesData';

const ClassroomImages = () => {
    return (
        <div className="gallery-grid">
            {classroomImages.map((img, index) => (
                <div 
                    className="image-card" 
                    key={img.id} 
                    style={{ animationDelay: `${index * 0.05}s` }}
                >
                    <div className="image-wrapper">
                        <img src={img.src} alt={img.alt} />
                        <div className="overlay">
                            {/* <span className="zoom-icon">🏫</span> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ClassroomImages;