import React from 'react';
import Gcard from './gal_card';
import gdata from './gdata';
import './styles/gallery.scss';

const Gallery = () => {
	return (
		<>
			<div className='gall'>
				{gdata.map((val, i) => {
					return <Gcard text={val.text} img={val.img} key={i} />;
				})}
			</div>
		</>
	);
};
export default Gallery;
