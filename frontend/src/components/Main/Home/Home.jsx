import React from "react";
import BenifitsCard from './BenifitsCard';
import './styles/home.scss';
import i1 from '../../../assets/SchoolActivites/img9.jpeg';
import i2 from '../../../assets/SchoolActivites/img10.jpeg';
import i3 from '../../../assets/SchoolActivites/img11.jpeg';
import Messagebox from './Messagebox';
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
