import React from 'react';
import { motion } from 'framer-motion';


const AboutUs = () => {
  return (
    <section id="about" className="about-section">
  <div className="about-container">
    <div className="about-header">
      <h2 className="about-title">About HelpDesk </h2>
      <p className="about-subtitle">
        We are dedicated to delivering smart, seamless support for teams and customers alike.
      </p>
    </div>

    <div className="about-content">
      <motion.div initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="about-image">
        <img src="https://img.freepik.com/free-vector/customer-support-flat-design-illustration_23-2148887720.jpg"
              alt="Support team" className="about-img" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }} className="about-text">
        <h3 className="about-heading">Empowering Smarter Support</h3>
        <p className="about-paragraph">HelpDesk  is a unified platform ...</p>
        <p className="about-paragraph">We believe support should be proactive ...</p>
        <ul className="about-list">
          <li>Instant ticket generation and tracking</li>
          <li>Multi-platform chat support</li>
          <li>Real-time collaboration between agents</li>
          <li>Data-driven insights and reporting</li>
        </ul>
      </motion.div>
    </div>

    <div className="about-vision">
      <h3 className="vision-title">Our Vision & Values</h3>
      <p className="vision-paragraph">
        We aim to redefine support by building trust ...
      </p>
    </div>
  </div>
</section>

  );
};

export default AboutUs;
