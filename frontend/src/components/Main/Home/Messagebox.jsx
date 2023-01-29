import React from 'react';
import i1 from '../../../assets/SchoolActivites/img9.jpeg';

const Messagebox = () => {
	return (
		<div className='msgbox'>
			<div className='msg-content'>
				<h3 className='block-title'>Message from the Director's Desk</h3>
				<div className='intro'>
					<p className='message'>
						Dear Parents / Guardians, I took forward to extending a warm welcome to
						your child on behalf of the faculty and staff of SN Public School. SN
						Public is a school that is determined to help develop its students into
						well-rounded citizens of the world. I am extremely proud of its academic
						record, expansive campus and caring environment.
					</p>
					<div className='source'>
						<div className='name-script'>Anita Mishra</div>
						<div className='title'>Director</div>
					</div>
				</div>
			</div>
			<div className='figure'>
				<img className='dir-img' src={i1} alt='' />
			</div>
		</div>
	);
};

export default Messagebox;
