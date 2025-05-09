import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './AdminProfile';
import './Admin.css';

const AdminSettingsPage = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (e) => setTheme(e.target.value);
  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const handleNotificationsToggle = () => setNotifications(!notifications);

  return (
    <div className="settings-container">
      <Sidebar />
      <div className="settingscontent">
        <Header />
        <div className="settings-body">
          <h2>Settings</h2>

          <div className="settings-section">
            <h3>Theme</h3>
            <select value={theme} onChange={handleThemeChange}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          

          <div className="settings-section">
            <h3>Notifications</h3>
            <label>
              <input
                type="checkbox"
                checked={notifications}
                onChange={handleNotificationsToggle}
              />
              Enable Notifications
            </label>
          </div>

          <button className="save-btn">Save Settings</button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
