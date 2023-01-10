import React from "react";
import './styles/home.scss';
import i1 from "../../../assets/SchoolActivites/img9.jpeg";
import i2 from "../../../assets/SchoolActivites/img10.jpeg";
import i3 from "../../../assets/SchoolActivites/img11.jpeg";
const images = [i1, i2, i3, i1];
const delay = 3000;
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
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, index) => (
            <img src={image} className="slide" key={index} />
          ))}
        </div>

        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="msgbox">
        <div className="content">
          <h3 className="block-title">Message from the Director's Desk</h3>
          <div className="intro">
            <p className="message">
			
              Dear Parents / Guardians, I took forward to extending a warm
              welcome to your child on behalf of the faculty and staff of SN
              Public School. SN Public is a school that is determined to help
              develop its students into well-rounded citizens of the world. I am
              extremely proud of its academic record, expansive campus and
              caring environment.
            </p>
            <div className="source">
              <div className="name-script">Anita Mishra</div>
              <div className="title">Director</div>
            </div>
          </div>
        </div>
        <div class="figure">
          <img className="dir-img" src={i1} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
