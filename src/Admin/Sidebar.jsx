import {  FaUserShield,FaTicketAlt, FaUsers, FaComments, FaChartBar, FaBell, FaBook, FaCog, FaClipboardList, FaStar, FaHome } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <h2 className="logo">Admin</h2>
    <ul className="nav-links">
      <li><FaHome /><Link to="/admin-dashboard"> Home</Link></li>
      <li><FaTicketAlt /> <Link to="/admin/tickets">Tickets</Link></li>
      <li><FaUserShield/> <Link to="/admin/users">Users</Link></li>
      <li><FaComments /><Link to="/admin/chats">Chats</Link> </li>
      <li><FaChartBar /><Link to="/admin/analytics">Analytics</Link> </li>
      <li><FaClipboardList /><Link to="/admin/audit">Audit Logs</Link> </li>
      
      <li><FaCog /><Link to="/admin/settings">Settings</Link> </li>
    </ul>
  </div>
);

  export default Sidebar;