import React from 'react';
import { motion } from 'framer-motion';
import { FaTicketAlt, FaRobot, FaChartLine, FaUsers, FaBell, FaMobile } from 'react-icons/fa';
import './Styles.css';

const features = [
  {
    icon: <FaTicketAlt className="icon" />,
    title: "Ticket Management",
    description: "Efficiently organize and prioritize support tickets with our intuitive system."
  },
  {
    icon: <FaRobot className="icon" />,
    title: "Real-time Chat",
    description: "Immediate responses to common questions with our Admin team."
  },
  {
    icon: <FaChartLine className="icon" />,
    title: "Analytics Dashboard",
    description: "Track performance metrics and gain insights into your support operations."
  },
  {
    icon: <FaUsers className="icon" />,
    title: "Team Collaboration",
    description: "Enable seamless collaboration among your support team members."
  },
  {
    icon: <FaBell className="icon" />,
    title: "Real-time Notifications",
    description: "Get instant alerts for new tickets and important updates."
  },
  {
    icon: <FaMobile className="icon" />,
    title: "Mobile Friendly",
    description: "Access your help desk from anywhere with our mobile-responsive design."
  }
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">
          Everything you need to provide exceptional customer support in one platform
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
