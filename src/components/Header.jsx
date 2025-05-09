// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaHeadset } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import './Styles.css';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="header sticky top-0 z-50 bg-white shadow-sm">
//       <div className="header-container">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="header-logo"
//         >
//           <FaHeadset className="logo-icon" />
//           <span className="logo-text">HelpDesk</span>
//         </motion.div>

//         <nav className="menu hidden md:flex">
//           <a href="#home">Home</a>
//           <a href="#aboutus">About Us</a>
//           <a href="#contact">Contact</a>
//           <a href="#features">Features</a>
//         </nav>

       
//       </div>

      
//     </header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import { FaBars, FaTimes, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Styles.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
    <div className="header-container">
  <motion.div className="header-logo"><FaHeadset className="logo-icon" />
  <span className="logo-text">HelpDesk</span></motion.div>
  <nav className="menu">
  <a href="#home">Home</a>
  <a href="#about">About Us</a>
  <a href="#contact">Contact</a>
  <a href="#features">Features</a>
</nav>
</div>
</header>
      
    
  );
};

export default Header;
