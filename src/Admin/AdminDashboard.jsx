
import React from 'react';
import './admin.css';
import adminImage from '../assets/admin-image.png';
import userImage from '../assets/user-image.png';
import Sidebar from './Sidebar';

import { FaSearch,FaTachometerAlt, FaUserShield,FaTicketAlt, FaUsers, FaComments, FaChartBar, FaBell, FaBook, FaCog, FaClipboardList, FaStar } from 'react-icons/fa';



const Header = () => (
    <div className="header">
      <div className="search-container">
        <FaSearch />
        <input type="text" placeholder="Search..." />
      </div>
      
      <div className="profile">
        <img src={adminImage} alt="profile" />
        <span>Admin</span>
      </div>
    </div>
  );

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
      <li><img className="user" src={userImage} alt="user" /> Siva</li>
      <li><img className="user"src={userImage} alt="user" /> Priya</li>
      <li><img className="user"src={userImage} alt="user" /> Kumar</li>
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