/** @format */

import React from 'react';
import './styles/Footer.scss';
import {AiOutlineMail, AiTwotonePhone, AiFillChrome} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer__container'>
      <div className='top-footer'>
        <div className='col col-2'>
          <div className='widget-title'>SN PUBLIC SCHOOL</div>
          <div className='pseudo-underline'></div>
          <div className='widget-div'>
            <div className='address-title mb-1'>
              Barka Gaon, New pul , Arrah , Biahr
            </div>
            <div className='contact-div mb-1'>
              <AiTwotonePhone />
              <span>Ph: 6206282610 / 7870613465</span>
            </div>
            <div className='contact-div mb-1'>
              <AiOutlineMail />
              <span>snpublicschool2020@gmail.com</span>
            </div>
            <div className='contact-div mb-1'>
              <AiFillChrome />
              <span>www.snpublicschoolara.com</span>
            </div>
          </div>
        </div>
        <div className='col col-1'>
          <div className='widget-title'>USEFUL LINKS</div>
          <div className='pseudo-underline'></div>
          <div className='widget-div'>
            <div className='widget-list'>
              <div className='widget-list-item mb-1'><Link to={'/admission'} preventScrollReset={true}>Admission</Link></div>
              <div className='widget-list-item mb-1'><Link to={'/about'} preventScrollReset={true}>About us</Link></div>
              <div className='widget-list-item mb-1'><Link to={'/contact'} preventScrollReset={true}>Contact</Link></div>
              <div className='widget-list-item mb-1'><Link to={'/gallery'} preventScrollReset={true}>Gallery</Link></div>
            </div>
          </div>
        </div>
        <div className='col col-1'>
          <div className='widget-title'>FOLLOW US</div>
          <div className='pseudo-underline'></div>
          <div className='widget-div'>
            <div className='widget-list'>
              <div className='widget-list-item mb-1'><Link to="#">Facebook</Link></div>
              <div className='widget-list-item mb-1'><Link to="#">Instagram</Link></div>
              <div className='widget-list-item mb-1'><Link to="#">Twitter</Link></div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer'>
        <div className='copyright'>Copyright 2023 &copy; SN Public School </div>
        <div className='bottom-footer-list'>
          <Link to={'/about'} preventScrollReset={true} className='bottom-footer-list-item'>ABOUT US</Link>
          <Link to={'/admission'} preventScrollReset={true} className='bottom-footer-list-item'>ADMISSION</Link>
          <Link to={'/contact'} preventScrollReset={true} className='bottom-footer-list-item'>REACH US</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
