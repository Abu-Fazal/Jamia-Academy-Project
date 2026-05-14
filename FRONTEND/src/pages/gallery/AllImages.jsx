import React from 'react';
import { allImages } from '../../data/ImagesData';

const AllImages = () => {
    return (
        <div className="gallery-grid">
            {allImages.map((img, index) => (
                <div 
                    className="image-card" 
                    key={img.id} 
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="image-wrapper">
                        <img src={img.src} alt={img.alt} />
                        <div className="overlay">
                            {/* <div className="zoom-icon">🔍</div> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllImages;