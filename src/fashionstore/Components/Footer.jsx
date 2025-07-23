

import React from 'react'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styling/Footer.css'
const Footer = () => {
  return (
    <div className='footerSection'>
      <div className="footerLeft">
        <ul>
          
          <li>
            <Link to="/about">
              <button>About Us</button>
            </Link>
          </li>
          
          <li>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </li>
          <li>
            <Link to="/conditions">
              <button>Terms & Conditions</button>
            </Link>
          </li>
          <li>
            <Link to="/service">
              <button>Terms of Service</button>
            </Link>
          </li>
          <li>
            <Link to="/exchangePolicy">
              <button>Exchange policy</button>
            </Link>
          </li>
          <li>
            <Link to="/shippingPolicy">
              <button>Shipping policy</button>
            </Link>
          </li>

        </ul>
      </div>
      <div className='footerIcons'>
       <h2>Follow Us</h2>
       <i class="fa-brands fa-youtube"></i>
       <i class="fa-brands fa-facebook"></i>
       <i class="fa-brands fa-whatsapp"></i>
      </div>
      <div className='footerContactInfo'>
     
        <div className="contactUs">
          <strong>Contact Us </strong>
          <div className="whatsApp">
               <FaWhatsapp className="text-whatsApp" />
               <span>+91 9390441208</span>
          </div>
       
          <div className="email">
          <FaEnvelope className="text-email" />
          <span>stunningfashionstore@gmail.com</span>
          </div>

          <div className="timings">
          <h3 className="onlineTiming">Online Dept Timing :</h3>
          <p className="availableTime">(10.30 AM to 06.30 PM IST)</p>
          </div>
    </div>
        </div>
    </div>
  );
}

export default Footer;