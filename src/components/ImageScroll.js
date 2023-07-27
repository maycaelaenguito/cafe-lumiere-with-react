import React from 'react';

const ImageScroll = ({ images }) => {
  return (
    <div
      style={{
        display: 'flex',
        overflowX: 'scroll', // Enable horizontal scrolling
        padding: '10px',
      }}
    >
      {images.map((image, index) => (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{
            width: '300px',
            height: '200px',
            margin: '0 10px',
            objectFit: 'cover',
          }}
        />
      ))}
    </div>
  );
};

export default ImageScroll;
