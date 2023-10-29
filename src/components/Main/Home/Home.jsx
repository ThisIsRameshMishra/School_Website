import React from 'react';
import BenifitsCard from './BenifitsCard';
import './styles/home.scss';
import i1 from '../../../assets/SchoolActivites/sn5_wide.jpeg';
import i2 from '../../../assets/SchoolActivites/sn6_wide.jpeg';
import i3 from '../../../assets/SchoolActivites/sn7_rotateit.jpeg';
import i4 from '../../../assets/SchoolActivites/Wide1.jpeg';
import i5 from '../../../assets/SchoolActivites/Wide2.jpeg';
import i6 from '../../../assets/SchoolActivites/Wide3.jpeg';
import i7 from '../../../assets/images/home1.jpeg';
import i8 from '../../../assets/images/home2.jpeg';
import i9 from '../../../assets/images/home3.jpeg';

import Messagebox from './Messagebox';
const images = [i8,i9, i2, i3, i4, i5, i6];
const delay = 5000;
const Home = () => {
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
    <>
      <div className='slideshow'>
        <div
          className='slideshowSlider'
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, index) => (
            <img src={image} className='slide' key={index} />
          ))}
        </div>

        <div className='slideshowDots'>
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

      <BenifitsCard />
      <Messagebox />
    </>
  );
};

export default Home;
