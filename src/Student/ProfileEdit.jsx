
// import React from "react";
// import "../index.css";

// const UpdateProfile = () => {
//   return (
//     <div className="profile-container">
//       <div className="sidebar">
//         <img src="/profile.jpg" alt="Profile" className="profile-pic" />
//         <h3>James Williams</h3>
//         <p>Web Designer</p>
//       </div>

//       <div className="profile-form">
//         <h2>Edit Profile</h2>
//         <section className="form-section">
//           <h3>General</h3>
//           <div className="form-row">
//             <label>Description</label>
//             <textarea className="input-large" />

//             <label>Telephone Number</label>
//             <input type="text" className="input" />
//           </div>

          

//           <div className="form-row">
//             <label>Date of Birth</label>
//             <input type="date" className="input" />

//             <label>Department <span className="required">*</span></label>
//             <select className="input">
//               <option>- Select Department -</option>
//             </select>
//           </div>

//           <div className="form-row">
//             <label>Skills</label>
//             <select className="input">
//               <option>- Select Skills -</option>
//             </select>

//             <label>Gender</label>
//             <div className="gender-radio">
//               <input type="radio" name="gender" /> Male
//               <input type="radio" name="gender" /> Female
//             </div>
//           </div>

          
//         </section>

//         <section className="form-section">
//           <h3>Contact</h3>
//           <div className="form-row">
//             <label>Mobile no</label>
//             <input type="text" className="input" />

            
//           </div>

          

//           <div className="form-row">
            
            

//             <label>Email <span className="required">*</span></label>
//             <input type="email" className="input" />
//           </div>
//         </section>

//         <section className="form-section">
//           <h3>Address</h3>
//           <div className="form-row">
//             <label>Street</label>
//             <textarea className="input-large" />

//             <label>State <span className="required">*</span></label>
//             <select className="input">
//               <option>- Select State -</option>
//             </select>
//           </div>

//           <div className="form-row">
            

//             <label>ZIP</label>
//             <input type="text" className="input" />
//           </div>

//           <div className="form-row">
//             <label>City</label>
//             <input type="text" className="input" />

            
//           </div>

//           <div className="form-row">
//             <label>Country</label>
//             <select className="input">
//               <option>- Select Country -</option>
//             </select>

            
//           </div>
//         </section>

//         <div className="form-buttons">
//           <button className="btn update">Update</button>
//           <button className="btn reset">Reset</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;

import React from "react";
import "./UpdateProfileModal.css"; // For modal styling

const UpdateProfileModal = ({ onClose }) => {
  const handleSave = () => {
    // handle save logic here (form data etc.)
    onClose(); // Close modal after saving
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
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
          <button className="btn update" onClick={handleSave}>Save</button>
          <button className="btn reset" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
