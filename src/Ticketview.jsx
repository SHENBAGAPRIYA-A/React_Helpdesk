import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import './index.css';
import userImg from './assets/user-image.png';
import adminImg from './assets/admin-image.png';
import UserProfileDrawer from './Userprofiledrawer';

const TicketView = () => {
  const { id } = useParams();
  const location = useLocation();

  // Get the status passed from navigation
  const ticketStatus = location.state?.ticketStatus || 'Unknown';

  const [messages, setMessages] = useState([
    { from: 'user', text: 'Issue with login' },
    { from: 'agent', text: 'Can you try resetting your password?' },
  ]);
  const [newMsg, setNewMsg] = useState('');

  const sendMessage = () => {
    if (!newMsg.trim()) return;
    setMessages([...messages, { from: 'user', text: newMsg }]);
    setNewMsg('');
  };

  return (
    <div className="main-layout">
      <Sidebar />
      <UserProfileDrawer />
      <div className="content">
        <h2 className="title">Ticket #{id}</h2>
        <p className="ticket-status-text">Status: {ticketStatus}</p>
        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div key={idx} className={`msg-row ${msg.from}`}>
              <img
                src={msg.from === 'user' ? userImg : adminImg}
                alt="avatar"
                className="msg-avatar"
              />
              <div className={`msg ${msg.from}`}>
                <strong>{msg.from === 'user' ? 'You' : 'Admin'}:</strong> {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            className="form-input"
            placeholder="Type a message"
            disabled={ticketStatus === 'Closed'}
          />
          <button
            onClick={sendMessage}
            className="btn"
            disabled={ticketStatus === 'Closed'}
          >
            Send Message
          </button>
        </div>
      </div>
      
      
    
    </div>
  );
};

export default TicketView;
