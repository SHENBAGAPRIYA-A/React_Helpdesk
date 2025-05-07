import React from 'react';
import Sidebar from './Sidebar';
import Header from './AdminProfile';
import './Admin.css';

const auditLogs = [
  { id: 1, user: 'John Smith', action: 'Logged In', time: '2025-05-05 10:24 AM' },
  { id: 2, user: 'Jane Doe', action: 'Updated Profile', time: '2025-05-04 02:18 PM' },
  { id: 3, user: 'Robert', action: 'Created Ticket', time: '2025-05-03 09:45 AM' },
  { id: 4, user: 'Alice', action: 'Closed Ticket', time: '2025-05-03 08:30 PM' },
];

const AuditLogsPage = () => {
  return (
    <div className="audit-logs-container">
      <Sidebar />
      <div className="audit-logs-content">
        <Header />
        <div className="audit-logs-body">
          <h2>Audit Logs</h2>
          <div className="audit-logs-table">
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Action</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map((log) => (
                  <tr key={log.id}>
                    <td>{log.user}</td>
                    <td>{log.action}</td>
                    <td>{log.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogsPage;
