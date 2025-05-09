
import React from 'react';
import './Admin.css';
import adminImage from '../assets/admin-image.png';
import userImage from '../assets/user-image.png';
import UpdateProfileModal from './AdminEditprofile';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { useState,useEffect,useRef } from 'react';
import { FaSearch,FaTachometerAlt, FaUserShield,FaTicketAlt, FaUsers, FaComments, FaChartBar, FaBell, FaBook, FaCog, FaClipboardList, FaStar, FaAssistiveListeningSystems, FaSignOutAlt, FaChargingStation } from 'react-icons/fa';


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
      <div className="dashboard-search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>

      {/* Profile */}
      <div className="admin-profile" ref={profileRef} onClick={toggleDrawer}>
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



const DashboardCards = () => (
  <div className="cards">
    <div className="card"> <h3>Active Tickets</h3> <p>54</p> </div>
    <div className="card"> <h3>Open Tickets</h3> <p>79</p> </div>
    <div className="card"> <h3>Closed Tickets</h3> <p>124</p> </div>
    <div className="card highlight"> <h3>New Tickets</h3> <p>8k</p> </div>
  </div>
);

const RecentProjects = () => (
  <div className="section recent">
    <h3>Recent Tickets</h3>
    <table>
      <thead>
        <tr><th>Subject</th><th>Assigned To</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr><td>Login Issue</td><td>John</td><td>Open</td></tr>
        <tr><td>Reset Password</td><td>Mary</td><td>Pending</td></tr>
        <tr><td>Server Error</td><td>Alex</td><td>Closed</td></tr>
      </tbody>
    </table>
  </div>
);

const NewCustomers = () => (
  <div className="section new-users">
    <h3>New Users</h3>
    <ul>
      <li><img className="usr" src={userImage} alt="usr" /> Siva</li>
      <li><img className="usr"src={userImage} alt="usr" /> Priya</li>
      <li><img className="usr"src={userImage} alt="usr" /> Kumar</li>
    </ul>
  </div>
);

const AdminDashboard = () => (
  <div className="admin-dashboard">
    <Sidebar />
    <div className="main-content">
      <Header />
      <DashboardCards />
      <div className="sections">
        <RecentProjects />
        <NewCustomers />
      </div>
    </div>
  </div>
);

export default AdminDashboard;
