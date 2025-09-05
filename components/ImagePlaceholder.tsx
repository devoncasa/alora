import React from 'react';

interface ImagePlaceholderProps {
    src: string;
    alt: string;
    className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ src, alt, className }) => {
    return (
        <div className={`relative bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden ${className || 'h-64'}`}>
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
            <span className="absolute text-gray-500 font-medium text-center p-2 select-none pointer-events-none">{alt}</span>
        </div>
    );
};

export default ImagePlaceholder;
