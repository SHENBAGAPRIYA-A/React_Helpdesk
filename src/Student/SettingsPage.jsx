
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import UserProfileDrawer from './Userprofiledrawer';
import '../index.css';
import Header from './Userprofiledrawer';

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
    <div className="app-layout">
      <Sidebar />
      <div className='main-content'>
      <Header />
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
    </div>
  );
};

export default UserSettingsPage;
