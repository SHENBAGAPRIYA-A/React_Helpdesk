
import React, { useState } from 'react';
import './Admin.css';
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Header from './AdminProfile'; // ✅ Corrected import

const ticketsData = [
  { id: 1, subject: 'Login issue', assignedTo: 'John', status: 'Open' },
  { id: 2, subject: 'Password reset', assignedTo: 'Mary', status: 'Pending' },
  { id: 3, subject: 'Crash report', assignedTo: 'Alex', status: 'Closed' },
];

const TicketPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredTickets = ticketsData.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || ticket.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="main-content">
        <Header/>
        <h2 className="ticket-title">Manage Tickets</h2>
        <div className="ticket-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="All">All</option>
            <option value="Open">Open</option>
            <option value="Pending">Pending</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <table className="ticket-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map(ticket => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.assignedTo}</td>
                <td className={`status ${ticket.status.toLowerCase()}`}>{ticket.status}</td>
                <td>
                  <button className="action-btn view"><FaEye /></button>
                  <button className="action-btn edit"><FaEdit /></button>
                  <button className="action-btn delete"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketPage;
