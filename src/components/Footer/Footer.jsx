/** @format */

import React from 'react';
import './styles/Footer.scss';
import {AiOutlineMail, AiTwotonePhone, AiFillChrome} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='footer__container'>
      <div className='top-footer'>
        <div className='col col-2'>
          <div className='widget-title'>SN PUBLIC SCHOOL</div>
          <div className='pseudo-underline'></div>
          <div className='widget-div'>
            <div className='address-title mb-1'>
              Kanakapura Road, Bangalore-560116
            </div>
            <div className='contact-div mb-1'>
              <AiTwotonePhone />
              <span>Ph: 6206282610 / 7870613465</span>
            </div>
            <div className='contact-div mb-1'>
              <AiOutlineMail />
              <span>snpublicschool@gmail.com</span>
            </div>
            <div className='contact-div mb-1'>
              <AiFillChrome />
              <span>www.snpublicschool.com</span>
            </div>
          </div>
        </div>
        <div className='col col-1'>
          <div className='widget-title'>USEFUL LINKS</div>
          <div className='pseudo-underline'></div>
          <div className='widget-div'>
            <div className='widget-list'>
              <div className='widget-list-item mb-1'>Admission</div>
              <div className='widget-list-item mb-1'>About us</div>
              <div className='widget-list-item mb-1'>Donate for education</div>
              <div className='widget-list-item mb-1'>Photo Gallery</div>
            </div>
          </div>
        </div>
        <div className='col col-1'>
          <div className='widget-title'>FOLLOW US</div>
          <div className='pseudo-underline'></div>
          <div className='widget-div'>
            <div className='widget-list'>
              <div className='widget-list-item mb-1'>Facebook</div>
              <div className='widget-list-item mb-1'>Instagram</div>
              <div className='widget-list-item mb-1'>Twitter</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer'>
        <div className='copyright'>Copyright 2023 &copy; SN Public School </div>
        <div className='bottom-footer-list'>
          <div className='bottom-footer-list-item'>ABOUT US</div>
          <div className='bottom-footer-list-item'>ADMISSION</div>
          <div className='bottom-footer-list-item'>REACH US</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
