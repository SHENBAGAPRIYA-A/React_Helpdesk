import React, { useState } from 'react';
import './Admin.css';
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Header from './AdminProfile'; // Make sure Header is defined correctly

const usersData = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'User', status: 'Active' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Admin', status: 'Inactive' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User', status: 'Active' },
];

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredUsers = usersData.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || user.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <h2 className="user-title">User Management</h2>
        <div className="user-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className={`status ${user.status.toLowerCase()}`}>{user.status}</td>
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

export default UserManagement;
