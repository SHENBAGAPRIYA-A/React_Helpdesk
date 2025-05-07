// // UpdateProfile.js
// import React, { useEffect, useState } from 'react';
// import { FaEdit, FaSave } from 'react-icons/fa';
// import './index.css';
// import UserProfileDrawer from './Userprofiledrawer';
// import Sidebar from './Sidebar';

// const UpdateProfile = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     const userData = {
//       name: 'Shenbagapriya',
//       email: 'shen@example.com'
//     };
//     setName(userData.name);
//     setEmail(userData.email);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Profile updated successfully');
//     // API call to update user data goes here
//   };

//   return (
//     <div className="app-layout">
//       <Sidebar />
//       <div className="main-content">
//         <UserProfileDrawer />
//         <div className="update-profile-card">
//           <h2><FaEdit /> Update Profile</h2>
//           <form onSubmit={handleSubmit} className="update-form">
//             <label>
//               Name:
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </label>
//             <label>
//               Email:
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </label>
//             <button type="submit"><FaSave /> Save Changes</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;
// import React, { useState } from 'react';
// import './index.css';

// const UpdateProfile = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     currentPassword: '',
//     newPassword: '',
//     phone: '',
//     language: 'English',
//     theme: 'light',
//     location: '',
//     bio: '',
//     profilePicture: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Profile updated successfully!');
//     // Submit to backend here
//   };

//   return (
//     <div className="update-profile-container">
//       <h2>Update Profile</h2>
//       <form onSubmit={handleSubmit} className="profile-form">
//         <div className="form-group">
//           <label>👤 Full Name</label>
//           <input name="fullName" value={formData.fullName} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label>📧 Email Address</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label>🔒 Current Password</label>
//           <input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} />
//         </div>

//         <div className="form-group">
//           <label>🔐 New Password</label>
//           <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
//         </div>

//         <div className="form-group">
//           <label>🖼️ Profile Picture</label>
//           <input type="file" name="profilePicture" accept="image/*" onChange={handleChange} />
//         </div>

//         <div className="form-group">
//           <label>📱 Phone Number</label>
//           <input name="phone" value={formData.phone} onChange={handleChange} />
//         </div>

//         <div className="form-group">
//           <label>🌍 Language Preference</label>
//           <select name="language" value={formData.language} onChange={handleChange}>
//             <option>English</option>
//             <option>Tamil</option>
//             <option>Hindi</option>
//             <option>French</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>🎨 Theme Preference</label>
//           <select name="theme" value={formData.theme} onChange={handleChange}>
//             <option value="light">Light</option>
//             <option value="dark">Dark</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>📍 Location / Time Zone</label>
//           <input name="location" value={formData.location} onChange={handleChange} />
//         </div>

//         <div className="form-group">
//           <label>📝 Bio / Description</label>
//           <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>
//         </div>

//         <button type="submit" className="submit-btn">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateProfile;
import React from "react";
import "./index.css";

const UpdateProfile = () => {
  return (
    <div className="profile-container">
      <div className="sidebar">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <h3>James Williams</h3>
        <p>Web Designer</p>
      </div>

      <div className="profile-form">
        <h2>Edit Profile</h2>

        <section className="form-section">
          <h3>General</h3>
          <div className="form-row">
            <label>Description</label>
            <textarea className="input-large" />

            <label>Telephone Number</label>
            <input type="text" className="input" />
          </div>

          

          <div className="form-row">
            <label>Date of Birth</label>
            <input type="date" className="input" />

            <label>Department <span className="required">*</span></label>
            <select className="input">
              <option>- Select Department -</option>
            </select>
          </div>

          <div className="form-row">
            <label>Skills</label>
            <select className="input">
              <option>- Select Skills -</option>
            </select>

            <label>Gender</label>
            <div className="gender-radio">
              <input type="radio" name="gender" /> Male
              <input type="radio" name="gender" /> Female
            </div>
          </div>

          
        </section>

        <section className="form-section">
          <h3>Contact</h3>
          <div className="form-row">
            <label>Mobile no</label>
            <input type="text" className="input" />

            
          </div>

          

          <div className="form-row">
            
            

            <label>Email <span className="required">*</span></label>
            <input type="email" className="input" />
          </div>
        </section>

        <section className="form-section">
          <h3>Address</h3>
          <div className="form-row">
            <label>Street</label>
            <textarea className="input-large" />

            <label>State <span className="required">*</span></label>
            <select className="input">
              <option>- Select State -</option>
            </select>
          </div>

          <div className="form-row">
            

            <label>ZIP</label>
            <input type="text" className="input" />
          </div>

          <div className="form-row">
            <label>City</label>
            <input type="text" className="input" />

            
          </div>

          <div className="form-row">
            <label>Country</label>
            <select className="input">
              <option>- Select Country -</option>
            </select>

            
          </div>
        </section>

        <div className="form-buttons">
          <button className="btn update">Update</button>
          <button className="btn reset">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

