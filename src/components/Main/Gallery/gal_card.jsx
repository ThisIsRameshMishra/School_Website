import React from 'react';
import './styles/gallery.scss';

const Gcard = (props) => {
	return (
		<>
			<div className='gh'>
				<div className='left'></div>
				{props.text}
				<div className='right'></div>
			</div>
			<div className='g_img_column'>
				<div className='g_img_row'></div>
				{props.img.map((elem, i) => {
					return (
						<div className='g_imgs' key={i}>
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
