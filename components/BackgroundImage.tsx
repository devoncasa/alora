import React from 'react';

interface BackgroundImageProps {
    imageUrl: string;
    altText: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageUrl, altText }) => {
    return (
        <div 
            role="img"
            aria-label={altText}
            className="fixed inset-0 z-0 transition-all duration-1000"
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    filter: 'blur(5px)',
                    transform: 'scale(1.05)', // Prevents blurred edges from showing
                }}
            />
            <div className="absolute inset-0 bg-white/70" />
        </div>
    );
};

export default BackgroundImage;