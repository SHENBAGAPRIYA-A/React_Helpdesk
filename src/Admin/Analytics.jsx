import React from 'react';
import Sidebar from './Sidebar';
import Header from './AdminProfile';
import './Admin.css';

// Example Data for Analytics
const analyticsData = {
  totalUsers: 1200,
  activeUsers: 450,
  ticketsResolved: 230,
  unresolvedTickets: 50,
  avgResponseTime: '2 mins',
};

const AnalyticsPage = () => {
  return (
    <div className="analytics-container">
      <Sidebar />
      <div className="analytics-content">
        <Header />
        <div className="analytics-body">
          <h2>Analytics Overview</h2>
          <div className="analytics-cards">
            <div className="analytics-card">
              <h3>Total Users</h3>
              <p>{analyticsData.totalUsers}</p>
            </div>
            <div className="analytics-card">
              <h3>Active Users</h3>
              <p>{analyticsData.activeUsers}</p>
            </div>
            <div className="analytics-card">
              <h3>Tickets Resolved</h3>
              <p>{analyticsData.ticketsResolved}</p>
            </div>
            <div className="analytics-card">
              <h3>Unresolved Tickets</h3>
              <p>{analyticsData.unresolvedTickets}</p>
            </div>
            <div className="analytics-card">
              <h3>Avg Response Time</h3>
              <p>{analyticsData.avgResponseTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
