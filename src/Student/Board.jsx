import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
export default function Board() {
  return (
    <div className="dashboard-board">
      <h2 className="dashboard-title">Helpdesk Dashboard</h2>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>My Tickets</h3>
          <ul>
            <li><Link to="/tickets">Ticket #1023: Login Issue</Link></li>
            <li><Link to="/tickets">Ticket #1045: Email not syncing</Link></li>
            <li><Link to="/tickets">Ticket #1061: VPN Access</Link></li>
          </ul>
        </div>

        <div className="dashboard-card">
          <h3>Ticket Status Summary</h3>
          <ul>
            <li>Open: 3</li>
            <li>In Progress: 2</li>
            <li>Resolved: 5</li>
            <li>Closed: 4</li>
          </ul>
        </div>

        <div className="dashboard-card">
          <h3>Recent Activity</h3>
          <ul>
            <li>Ticket #1061 updated by Support</li>
            <li>New response on Ticket #1045</li>
            <li>Ticket #1023 marked as resolved</li>
          </ul>
        </div>

        <div className="dashboard-card">
          <h3>Support Contacts</h3>
          <ul>
            <li>IT Support: it-support@helpdesk.com</li>
            <li>Phone: +91-98765-43210</li>
            <li>Available: Mon-Fri, 9 AM - 6 PM</li>
          </ul>
        </div>

        <div className="dashboard-card">
          <h3>Announcements</h3>
          <p>New Helpdesk Portal Update - May 10. Expect a brief downtime from 6–7 PM.</p>
        </div>
      </div>
    </div>
  );
}
