import React from 'react';
import { benifitsData } from './homeConstant';

const BenifitsCard = () => {
  return (
    <div className='bc-container flex mx-8 justify-center mb-8'>
      <div className='benifit-list w-5/6 flex-col sm:flex-row max-sm:items-center'>
        {benifitsData?.map((item) => {
          return (
            <div
              className='list-div flex items-center max-sm:gap-4 gap-10 flex-col max-sm:mb-20'
              key={item.image}
            >
              <div className='bc-image'>
                <img src={item.image} alt={`${item.title}`} />
              </div>
              <div className='bc-title text-3xl font-bold'>{item.title}</div>
              <div className='bc-content text-xl'>{item.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenifitsCard;
