
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaHeadset } from 'react-icons/fa';
import './Styles.css'; // New CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Product",
      items: ["Features", "Pricing", "Integrations", "Roadmap"]
    },
    {
      title: "Company",
      items: ["About Us", "Careers", "Blog", "Press"]
    },
    {
      title: "Resources",
      items: ["Documentation", "API Reference", "Community", "Help Center"]
    },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms of Service", "Security", "GDPR"]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <FaHeadset className="footer-logo-icon" />
              <span className="footer-logo-text">HelpDesk</span>
            </div>
            <p className="footer-description">
              The modern help desk solution for businesses of all sizes. Streamline your customer support and deliver exceptional service.
            </p>
            <div className="footer-socials">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </div>

          {links.map((link, index) => (
            <div className="footer-column" key={index}>
              <h4 className="footer-heading">{link.title}</h4>
              <ul className="footer-list">
                {link.items.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="footer-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} HelpDesk. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
