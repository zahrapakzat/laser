import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`image-container ${className || ''}`}>
      {!isLoaded && (
        <div className="image-placeholder" style={{ width, height }}>
          <div className="loading-spinner"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`optimized-image ${isLoaded ? 'loaded' : ''}`}
      />
      <style jsx>{`
        .image-container {
          position: relative;
          overflow: hidden;
        }
        .image-placeholder {
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loading-spinner {
          width: 30px;
          height: 30px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .optimized-image {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .optimized-image.loaded {
          opacity: 1;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage; 