// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import profileImg from './assets/user-image.png';
// import './index.css';


// const UserProfileDrawer = () => {
//   const [open, setOpen] = useState(false);
//   const drawerRef = useRef();
//   const navigate = useNavigate();
//   const handleLogout = (e) => {
//     e.preventDefault();
//     alert("Logged out...");
//     navigate('/login');
//   };
//   const toggleDrawer = () => setOpen(!open);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (drawerRef.current && !drawerRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div className="user-icon-container" ref={drawerRef}>
//       <img
//         src={profileImg}
//         alt="User"
//         className="user-icon"
//         onClick={toggleDrawer}
//       />
//       {open && (
//         <div className="user-dropdown">
//           <button onClick={() => alert('Navigate to Profile')}>My Profile</button>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfileDrawer;
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImg from './assets/user-image.png';
import './index.css';

const UserProfileDrawer = () => {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef();
  const navigate = useNavigate();

  // Logout function
  const handleLogout = (e) => {
    e.preventDefault();
    alert('Logged out...');
    localStorage.removeItem('token'); // Remove the JWT token
    navigate('/'); // Redirect to login page
  };

  // Toggle drawer open/close
  const toggleDrawer = () => setOpen(!open);

  // Close the drawer if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="user-icon-container" ref={drawerRef}>
      <img
        src={profileImg}
        alt="User"
        className="user-icon"
        onClick={toggleDrawer}
      />
      {open && (
        <div className="user-dropdown">
          {/* My Profile Button */}
          <button onClick={() => navigate('/profile')}>My Profile</button>
          
          {/* Update Profile Button (New functionality) */}
          <button onClick={() => navigate('/profileedit')}>Update Profile</button>

          {/* Additional Modules */}
          <button onClick={() => alert('Navigating to Settings')}>Settings</button>
          <button onClick={() => alert('Navigating to Help')}>Help</button>

          {/* Logout Button */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default UserProfileDrawer;
