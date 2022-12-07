import React from 'react';
import './styles/gallery.css';

const Gcard = (props) => {
	console.log(props.img);
	return (
		<>
			<h1 className='gh'>{props.text}</h1>
			<div className='g_img_column'>
				<div className='g_img_row'></div>
				{props.img.map((elem) => {
					return (
						<div className='g_imgs'>
							<img src={elem} alt='...' />
						</div>
					);
				})}
				<div></div>
			</div>
		</>
	);
};
export default Gcard;
