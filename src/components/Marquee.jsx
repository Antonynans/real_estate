/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const ImageMarquee = ({ images, speed }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % (images.length * 100));
    }, speed);

    return () => clearInterval(interval);
  }, [images, speed]);

  return (
    <div
      style={{
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            flex: '0 0 auto',
            marginRight: '2rem', // Adjust spacing between images
            transform: `translateX(${-position + index * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          <img src={image} alt={`Image ${index + 1}`} className='h-8' />
        </div>
      ))}
    </div>
  );
};

export default ImageMarquee;
