import '../App.css';
import { Link } from 'react-router-dom';
import { FaHome, FaTicketAlt,FaCog, FaChartBar, FaClipboardList } from 'react-icons/fa';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Helpdesk</h2>
      <ul>
        <li><FaHome /><Link to="/dashboard"> Home</Link></li>
        <li><FaClipboardList/><Link to="/tickets"> Tickets</Link></li>
        <li><FaTicketAlt/><Link to="/raiseticket"> Raise Tickets</Link></li>
        <li><FaChartBar/><Link to="/report"> Reports</Link></li>
        <li><FaCog /><Link to="/settings"> Settings</Link></li>
      </ul>
    </div>
  );
}
