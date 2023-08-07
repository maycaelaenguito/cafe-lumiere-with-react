import React from 'react';
import '../css/gal-carousel.css';

function GalleryCarousel() {
  const images = [
    'https://res.cloudinary.com/dk3aalcb0/image/upload/v1690617728/Cafe%20Lumiere/breakfast-g99068f614_1280_rlbpmb.jpg',
    'https://res.cloudinary.com/dk3aalcb0/image/upload/v1690617728/Cafe%20Lumiere/coffee-gd5c859014_1280_ywjfoa.jpg',
    'https://res.cloudinary.com/dk3aalcb0/image/upload/v1690618283/Cafe%20Lumiere/pancakes-g4de404f00_1280_me7de0.jpg',
    'https://res.cloudinary.com/dk3aalcb0/image/upload/v1690529611/Cafe%20Lumiere/4_ivg736.png',
    'https://res.cloudinary.com/dk3aalcb0/image/upload/v1690618283/Cafe%20Lumiere/starbucks-g94c482e9d_1280_y1fjha.jpg',
    'https://res.cloudinary.com/dk3aalcb0/image/upload/v1690529609/Cafe%20Lumiere/1_d5pfny.png',
    'https://res.cloudinary.com/dk3aalcb0/image/upload/v1690618283/Cafe%20Lumiere/cafe-g84c12c358_1920_psudmt.jpg',
    'https://res.cloudinary.com/dk3aalcb0/image/upload/v1690529609/Cafe%20Lumiere/5_ak2ipi.png',
    'https://res.cloudinary.com/dk3aalcb0/image/upload/v1690529609/Cafe%20Lumiere/6_zgctye.png',
  ];
  const delay = 2500;

  function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }, [index]);

    return (
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((imageUrl, idx) => (
            <div className="slide" key={idx}>
              <div className='img-slide-container'>
                 <img src={imageUrl} alt={`Slide ${idx}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return <Slideshow />;
}

export default GalleryCarousel;
