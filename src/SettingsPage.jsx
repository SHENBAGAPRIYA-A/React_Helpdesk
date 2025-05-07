// import React, { useState } from 'react';
// import './Reportpage.css';
// import Sidebar from './Sidebar';
// import UserProfileDrawer from './Userprofiledrawer';

// // Profile Section Component
// const ProfileSection = ({ username, email, onUpdateProfile }) => {
//   return (
//     <div className="settings-section">
//       <h3>Profile Information</h3>
//       <div className="input-group">
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" value={username} onChange={(e) => onUpdateProfile('username', e.target.value)} />
//       </div>
//       <div className="input-group">
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={(e) => onUpdateProfile('email', e.target.value)} />
//       </div>
//     </div>
//   );
// };

// // Security Section Component
// const SecuritySection = ({ newPassword, confirmPassword, onPasswordChange }) => {
//   return (
//     <div className="settings-section">
//       <h3>Change Password</h3>
//       <div className="input-group">
//         <label htmlFor="new-password">New Password:</label>
//         <input type="password" id="new-password" value={newPassword} onChange={(e) => onPasswordChange('newPassword', e.target.value)} />
//       </div>
//       <div className="input-group">
//         <label htmlFor="confirm-password">Confirm Password:</label>
//         <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => onPasswordChange('confirmPassword', e.target.value)} />
//       </div>
//     </div>
//   );
// };

// // Notifications Section Component
// const NotificationSection = ({ notificationsEnabled, onToggleNotifications }) => {
//   return (
//     <div className="settings-section">
//       <h3>Notifications</h3>
//       <label className="switch">
//         <input type="checkbox" checked={notificationsEnabled} onChange={onToggleNotifications} />
//         <span className="slider round"></span>
//       </label>
//       <span>{notificationsEnabled ? 'Notifications Enabled' : 'Notifications Disabled'}</span>
//     </div>
//   );
// };

// const SettingsPage = () => {
//   const [selectedTab, setSelectedTab] = useState('profile'); // State for active tab
//   const [username, setUsername] = useState('JohnDoe');
//   const [email, setEmail] = useState('johndoe@example.com');
//   const [notificationsEnabled, setNotificationsEnabled] = useState(true);
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   // Update Profile Info
//   const handleProfileUpdate = (field, value) => {
//     if (field === 'username') setUsername(value);
//     if (field === 'email') setEmail(value);
//   };

//   // Update Password Info
//   const handlePasswordChange = (field, value) => {
//     if (field === 'newPassword') setNewPassword(value);
//     if (field === 'confirmPassword') setConfirmPassword(value);
//   };

//   // Toggle Notifications
//   const handleToggleNotifications = () => {
//     setNotificationsEnabled(!notificationsEnabled);
//   };

//   return (
//     <div className="settings-layout">
//       <Sidebar />
//       <UserProfileDrawer />
//       <div className="settings-content">
//         <h2>Settings</h2>

//         {/* Tab Navigation */}
//         <div className="tabs">
//           <div
//             className={`tab ${selectedTab === 'profile' ? 'active' : ''}`}
//             onClick={() => setSelectedTab('profile')}
//           >
//             Profile
//           </div>
//           <div
//             className={`tab ${selectedTab === 'security' ? 'active' : ''}`}
//             onClick={() => setSelectedTab('security')}
//           >
//             Security
//           </div>
//           <div
//             className={`tab ${selectedTab === 'notifications' ? 'active' : ''}`}
//             onClick={() => setSelectedTab('notifications')}
//           >
//             Notifications
//           </div>
//         </div>

//         {/* Tab Content */}
//         {selectedTab === 'profile' && (
//           <ProfileSection username={username} email={email} onUpdateProfile={handleProfileUpdate} />
//         )}

//         {selectedTab === 'security' && (
//           <SecuritySection
//             newPassword={newPassword}
//             confirmPassword={confirmPassword}
//             onPasswordChange={handlePasswordChange}
//           />
//         )}

//         {selectedTab === 'notifications' && (
//           <NotificationSection
//             notificationsEnabled={notificationsEnabled}
//             onToggleNotifications={handleToggleNotifications}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import UserProfileDrawer from './Userprofiledrawer';
import './index.css';

const UserSettingsPage = () => {
  const [selectedTab, setSelectedTab] = useState('profile');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert('Profile updated!');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      alert('Password changed!');
    }
  };

  const handleToggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <div className="main-layout">
      <Sidebar />
      <UserProfileDrawer />
      <div className="content">
        <div className="header">
          <h2 className="title">Settings</h2>
        </div>

        <div className="tabs">
          <div
            className={`tab ${selectedTab === 'profile' ? 'active' : ''}`}
            onClick={() => setSelectedTab('profile')}
          >
            Profile
          </div>
          <div
            className={`tab ${selectedTab === 'security' ? 'active' : ''}`}
            onClick={() => setSelectedTab('security')}
          >
            Security
          </div>
          <div
            className={`tab ${selectedTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setSelectedTab('notifications')}
          >
            Notifications
          </div>
        </div>

        <div className="settings-content">
          {selectedTab === 'profile' && (
            <form onSubmit={handleProfileUpdate}>
              <div className="settings-section">
                <h3>Profile</h3>
                <div className="input-group">
                  <label>Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="save-btn">Update Profile</button>
              </div>
            </form>
          )}

          {selectedTab === 'security' && (
            <form onSubmit={handlePasswordChange}>
              <div className="settings-section">
                <h3>Change Password</h3>
                <div className="input-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="save-btn">Change Password</button>
              </div>
            </form>
          )}

          {selectedTab === 'notifications' && (
            <div className="settings-section">
              <h3>Notification Settings</h3>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={handleToggleNotifications}
                />
                <span className="slider round"></span>
              </label>
              <p>{notificationsEnabled ? 'Notifications Enabled' : 'Notifications Disabled'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;
