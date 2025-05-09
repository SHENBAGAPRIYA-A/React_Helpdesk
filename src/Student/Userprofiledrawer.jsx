


// import React, { useState, useEffect, useRef } from 'react';
// import { FaCog, FaSignOutAlt, FaUserShield } from 'react-icons/fa';
// import usrImage from '../assets/user-image.png';
// import { Link } from 'react-router-dom';
// import './Header.css';


// const Header = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);

//   const drawerRef = useRef(null);
//   const profileRef = useRef(null);

//   const toggleDrawer = () => {
//     setDrawerOpen(true); // Always open the drawer when clicked
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         drawerRef.current &&
//         !drawerRef.current.contains(event.target) &&
//         profileRef.current &&
//         !profileRef.current.contains(event.target)
//       ) {
//         setDrawerOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Handle the opening of the profile modal
  

//   return (
//     <div className="dashboard-header">
//       <div className="profile" ref={profileRef} onClick={toggleDrawer}>
//         <img src={usrImage} alt="profile" />
//         <span>User</span>
//       </div>

//       {isDrawerOpen && (
//         <div className="dashboard-profile-drawer" ref={drawerRef}>
//           <ul>
//             <li><FaUserShield/><Link to="/profileedit"> My Profile</Link></li>
//             <li><FaCog/><Link to="/settings"> Settings</Link></li>
//             <li><FaSignOutAlt/><Link to="/"> Logout</Link></li>
//           </ul>
//         </div>
//       )}

     
//     </div>
//   );
// };

// export default Header;


import React, { useState, useEffect, useRef } from 'react';
import { FaCog, FaSignOutAlt, FaUserShield } from 'react-icons/fa';
import usrImage from '../assets/user-image.png';
import './Header.css';
import UpdateProfileModal from './ProfileEdit'; // import modal

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const drawerRef = useRef(null);
  const profileRef = useRef(null);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dashboard-header">
      <div className="profile" ref={profileRef} onClick={toggleDrawer}>
        <img src={usrImage} alt="profile" />
        <span>User</span>
      </div>

      {isDrawerOpen && (
        <div className="dashboard-profile-drawer" ref={drawerRef}>
          <ul>
            <li onClick={() => { setShowProfileModal(true); setDrawerOpen(false); }}>
              <FaUserShield /> My Profile
            </li>
            <li><FaCog /><a href="/settings">Settings</a></li>
            <li><FaSignOutAlt /><a href="/">Logout</a></li>
          </ul>
        </div>
      )}

      {showProfileModal && <UpdateProfileModal onClose={() => setShowProfileModal(false)} />}
    </div>
  );
};

export default Header;
