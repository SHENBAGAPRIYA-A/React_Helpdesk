// import React from 'react';
// import {Link, useNavigate } from 'react-router-dom';
// import './index.css';
// import Sidebar from './Sidebar';
// import UserProfileDrawer from "./Userprofiledrawer";

// const dummyTickets = [
//   { id: 1, subject: 'Login not working', status: 'Open' },
//   { id: 2, subject: 'Network Problem', status: 'Closed' },
//   { id: 3, subject: 'Cannot able to reload', status: 'In Progress' },
// ];

// const TicketList = () => {
//     const navigate = useNavigate();

//   const handleAddClick = () => {
//     navigate('/raiseticket');
//   };
//   return (
    
//     <div className="main-layout">
//       <Sidebar />
//       <UserProfileDrawer />
//       <div className="content">
//       <div className="header">
//     <h2 className="title">My Tickets</h2>
//     <button className="add-button" onClick={() => navigate("/raiseticket")}>+ Add</button>
//   </div>
        
//         <ul className="ticket-list">
//           {dummyTickets.map((ticket) => (
//             <li key={ticket.id} className="ticket-item">
//               <div>
//                 <h3 className="ticket-subject">{ticket.subject}</h3>
//                 <p className="ticket-status">Status: {ticket.status}</p>
//               </div>
//               <Link
//   to={`/ticket/${ticket.id}`}
//   state={{ ticketStatus: ticket.status }}
//   className="link"
// >
//   View
// </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TicketList;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import Sidebar from './Sidebar';
import UserProfileDrawer from "./Userprofiledrawer";
import { FaTrash } from 'react-icons/fa'; // Import the delete icon

const initialTickets = [
  { id: 1, subject: 'Login not working', status: 'Open' },
  { id: 2, subject: 'Network Problem', status: 'Closed' },
  { id: 3, subject: 'Cannot able to reload', status: 'In Progress' },
];

const TicketList = () => {
  const [tickets, setTickets] = useState(initialTickets); // State to hold the tickets
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/raiseticket');
  };

  const handleDelete = (id) => {
    // Filter out the ticket with the matching id
    const updatedTickets = tickets.filter(ticket => ticket.id !== id);
    setTickets(updatedTickets); // Update the state
  };

  return (
    <div className="main-layout">
      <Sidebar />
      <UserProfileDrawer />
      <div className="content">
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
  );
};

export default TicketList;
