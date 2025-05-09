
import React, { useState } from 'react';
import {
  PieChart, Pie, Cell, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { saveAs } from 'file-saver';
import './ReportPage.css';
import Sidebar from './Sidebar';
import Header from './Userprofiledrawer';

// Sample Ticket Data
const initialTickets = [
  { id: 1, subject: 'Login not working', status: 'Open', date: '2025-05-01' },
  { id: 2, subject: 'Network Problem', status: 'Closed', date: '2025-05-02' },
  { id: 3, subject: 'Cannot reload', status: 'In Progress', date: '2025-05-03' },
  { id: 4, subject: 'Page not loading', status: 'Open', date: '2025-05-04' },
  { id: 5, subject: 'App crash', status: 'Closed', date: '2025-05-05' },
  { id: 6, subject: 'Server downtime', status: 'In Progress', date: '2025-05-06' },
];

const ReportPage = () => {
  const [tickets, setTickets] = useState(initialTickets);

  // Status Count
  const statusCount = tickets.reduce((acc, ticket) => {
    acc[ticket.status] = (acc[ticket.status] || 0) + 1;
    return acc;
  }, {});

  // Group by Date
  const ticketsByDate = tickets.reduce((acc, ticket) => {
    const date = ticket.date;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const ticketDateData = Object.entries(ticketsByDate).map(([date, count]) => ({ date, count }));

  // Pie chart data
  const pieChartData = Object.entries(statusCount).map(([status, count]) => ({ name: status, value: count }));

  // Download CSV
  const downloadReport = () => {
    const csvData = tickets.map(ticket => ({
      ID: ticket.id,
      Subject: ticket.subject,
      Status: ticket.status,
      Date: ticket.date,
    }));

    const csvContent = [
      ['ID', 'Subject', 'Status', 'Date'],
      ...csvData.map(item => [item.ID, item.Subject, item.Status, item.Date]),
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'ticket-report.csv');
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Header />

        <div className="content">
          <div className="header">
            <h2 className="title">Ticket Report</h2>
          </div>

          <div className="statistics">
            <h3>Total Tickets: {tickets.length}</h3>
            <p>Open: {statusCount.Open || 0}</p>
            <p>Closed: {statusCount.Closed || 0}</p>
            <p>In Progress: {statusCount['In Progress'] || 0}</p>
          </div>

          <div className="charts">
            <div className="chart-container">
              <h4>Ticket Status</h4>
              <PieChart width={400} height={400}>
                <Pie
                  data={pieChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#8884d8"
                  label
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#ff9999', '#66b3ff', '#99ff99'][index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>

            <div className="chart-container">
              <h4>Tickets by Date</h4>
              <BarChart width={500} height={300} data={ticketDateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>

          <button className="export-btn" onClick={downloadReport}>
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
