import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-details">
        <a href="https://github.com/shubhushan49" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/shubhushan-kattel-aa19291b2/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <p>© 2025 My Portfolio. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;