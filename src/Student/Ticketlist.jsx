
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import Sidebar from './Sidebar';

import { FaTrash } from 'react-icons/fa'; // Import the delete icon
import Header from './Userprofiledrawer';

const initialTickets = [
  { id: 1, subject: 'Login not working', status: 'Open' },
  { id: 2, subject: 'Network Problem', status: 'Closed' },
  { id: 3, subject: 'Cannot able to reload', status: 'In Progress' },
];

const TicketList = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/raiseticket');
  };

  const handleDelete = (id) => {
    const updatedTickets = tickets.filter(ticket => ticket.id !== id);
    setTickets(updatedTickets);
  };

  return (
    <div className="app-layout"> {/* Sidebar on the left */}
      <Sidebar />
      <div className="main-content"> {/* Header + Main Content */}
        <Header /> {/* Header at the top */}
        <div className="content"> {/* Main content below header */}
          <div className="header">
            <h2 className="title">My Tickets</h2>
            <button className="add-button" onClick={handleAddClick}>+ Add</button>
          </div>

          <ul className="ticket-list">
            {tickets.map((ticket) => (
              <li key={ticket.id} className="ticket-item">
                <div>
                  <h3 className="ticket-subject">{ticket.subject}</h3>
                  <p className="ticket-status">Status: {ticket.status}</p>
                </div>
                <div className="ticket-actions">
                  <Link
                    to={`/ticket/${ticket.id}`}
                    state={{ ticketStatus: ticket.status }}
                    className="link"
                  >
                    View
                  </Link>
                  <FaTrash 
                    className="delete-icon" 
                    onClick={() => handleDelete(ticket.id)} 
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TicketList;
