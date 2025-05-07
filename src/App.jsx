import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Signup from './Signup';
import TicketList from './Ticketlist';
import RaiseTicket from './Raiseticket';
import TicketView from './Ticketview';
import ReportPage from './Reportpage';
import UpdateProfile from './ProfileEdit';
import AdminDashboard from './Admin/AdminDashboard';
import TicketPage from './Admin/TicketManagement';
import UserManagement from './Admin/UserManagement';
import AdminFullChatPage from './Admin/Adminfullchat';
import AnalyticsPage from './Admin/Analytics';
import AuditLogsPage from './Admin/Auditlogs';
import AdminSettingsPage from './Admin/Settings';
import UserSettingsPage from './SettingsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tickets" element={<TicketList />} />
        <Route path="/raiseticket" element={<RaiseTicket/>}/>
        <Route path="/ticket/:id" element={<TicketView />} />
        <Route path="/report" element={<ReportPage/>}/>
        <Route path="/settings" element={<UserSettingsPage/>}/>
        <Route path="/profileedit" element={<UpdateProfile />}/>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/tickets" element={<TicketPage/>}/>
        <Route path="/admin/users" element={<UserManagement/>}/>
        <Route path="/admin/chats" element={<AdminFullChatPage/>}/>
        <Route path="/admin/analytics" element={<AnalyticsPage/>}/>
        <Route path="/admin/audit" element={<AuditLogsPage/>}/>
        <Route path="/admin/settings" element={<AdminSettingsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
