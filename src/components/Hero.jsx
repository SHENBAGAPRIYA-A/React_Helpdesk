// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaHeadset, FaArrowRight } from 'react-icons/fa';

// const Hero = () => {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
//       <div className="container">
//         <div className="flex flex-col md:flex-row items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2 mb-10 md:mb-0"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//               Modern Help Desk Solution for Your Business
//             </h1>
//             <p className="text-lg text-gray-600 mb-8">
//               Streamline your customer support with our powerful help desk software.
//               Manage tickets, automate responses, and provide exceptional service.
//             </p>
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <a href="/signup" className="btn btn-primary flex items-center justify-center">
//                 Get Started <FaArrowRight className="ml-2" />
//               </a>
//               <a href="#features" className="btn btn-outline">
//                 Learn More
//               </a>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2"
//           >
            
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './Styles.css'; // Include this CSS file

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="overlay" />
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>
              Modern Help Desk Solution <br />
              for Student
            </h1>
            <p>
              Streamline your user support with our powerful help desk platform. <br />
              Manage tickets, automate responses, and deliver world-class service.
            </p>
            <div className="hero-buttons">
              <a href="/Login" className="primary-btn">
                Get Started <FaArrowRight className="icon" />
              </a>
              <a href="#features" className="outline-btn">
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-image"
          >
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
