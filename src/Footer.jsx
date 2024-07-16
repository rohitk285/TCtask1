import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="text-white text-center py-4 mt-10" style={{
        backgroundColor: '#111'
    }}>
      <div className="container mx-auto">
        <p className='mb-10'>&copy; 2024 Freelancopia. All rights reserved.</p>
        <p>Contact Us</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="mailto:info@freelancopia.com" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
