import React from 'react';
import './styles/gallery.css';

const Gcard = (props) => {
	console.log(props.img);
	return (
		<React.Fragment>
			<div className='gh'>
				<div className='left'></div>
				{props.text}
				<div className='right'></div>
			</div>
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
            
		</React.Fragment>
	);
};
export default Gcard;
