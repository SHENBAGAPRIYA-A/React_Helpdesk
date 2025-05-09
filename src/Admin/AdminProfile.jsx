
// import React, { useState, useEffect, useRef } from 'react';
// import { FaCog, FaSearch, FaSignOutAlt, FaUserShield } from 'react-icons/fa';
// import adminImage from '../assets/admin-image.png';
// import { Link } from 'react-router-dom';
// import './Admin.css';
// import UpdateProfileModal from './AdminEditprofile';

// const Header = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const drawerRef = useRef(null);
//   const profileRef = useRef(null);
//   const [showProfileModal, setShowProfileModal] = useState(false);

//   const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

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

//   return (
//     <div className="dashboard-header">
//       <div className="profile" ref={profileRef} onClick={toggleDrawer}>
//         <img src={adminImage} alt="profile" />
//         <span>Admin</span>
//       </div>

      

//       {/* {isDrawerOpen && (
//   <>
//     <div className="dashboard-profile-drawer" ref={drawerRef}>
//       <ul>
//         <li onClick={() => { setShowProfileModal(true); setDrawerOpen(false); }}>
//           <FaUserShield /> My Profile
//         </li>
//         <li><FaCog /><Link to="/admin/settings"> Settings</Link></li>
//         <li><FaSignOutAlt /><Link to="/"> Logout</Link></li>
//       </ul>
//     </div>
//     {showProfileModal && <UpdateProfileModal onClose={() => setShowProfileModal(false)} />}
//   </>
// )} */}
// {isDrawerOpen && (
//   <>
//     <div className="dashboard-profile-drawer" ref={drawerRef}>
//       <ul>
//         <li
//           onClick={(e) => {
//             e.stopPropagation();
//             setShowProfileModal(true);
//             setDrawerOpen(false);
//           }}
//         >
//           <FaUserShield /> My Profile
//         </li>
//         <li onClick={(e) => e.stopPropagation()}>
//           <FaCog />
//           <Link to="/admin/settings"> Settings</Link>
//         </li>
//         <li onClick={(e) => e.stopPropagation()}>
//           <FaSignOutAlt />
//           <Link to="/"> Logout</Link>
//         </li>
//       </ul>
//     </div>
//     {showProfileModal && <UpdateProfileModal onClose={() => setShowProfileModal(false)} />}
//   </>
// )}
      
//     </div>
//   );
// };

// export default Header;
import React, { useState, useEffect, useRef } from 'react';
import { FaCog, FaSearch, FaSignOutAlt, FaUserShield } from 'react-icons/fa';
import adminImage from '../assets/admin-image.png';
import { Link } from 'react-router-dom';
import './Admin.css';
import UpdateProfileModal from './AdminEditprofile';

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

    document.addEventListener('click', handleClickOutside); // changed from mousedown to click
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="dashboard-header">
      {/* Search Container */}
      

      {/* Profile */}
      <div className="profile" ref={profileRef} onClick={toggleDrawer}>
        <img src={adminImage} alt="Admin" />
        <span>Admin</span>
      </div>

      {/* Profile Drawer */}
      {isDrawerOpen && (
        <div className="dashboard-profile-drawer" ref={drawerRef}>
          <ul>
            <li
              onClick={(e) => {
                e.stopPropagation();
                setShowProfileModal(true);
                setDrawerOpen(false);
              }}
            >
              <FaUserShield /> My Profile
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <FaCog />
              <Link to="/admin/settings"> Settings</Link>
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <FaSignOutAlt />
              <Link to="/"> Logout</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Profile Modal */}
      {showProfileModal && (
        <UpdateProfileModal onClose={() => setShowProfileModal(false)} />
      )}
    </div>
  );
};

export default Header;
