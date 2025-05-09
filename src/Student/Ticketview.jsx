import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Userprofiledrawer'; // This is your top header
import './Reportpage.css';
import userImg from '../assets/user-image.png';
import adminImg from '../assets/admin-image.png';

const TicketView = () => {
  const { id } = useParams();
  const location = useLocation();
  const ticketStatus = location.state?.ticketStatus || 'Unknown';

  const [messages, setMessages] = useState([
    { from: 'user', text: 'Issue with login' },
    { from: 'admin', text: 'Can you try resetting your password?' },
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
      <div className="right-panel">
        <Header />
        <div className="content">
          <h2 className="title">Ticket #{id}</h2>
          <p className="ticket-status-text">Status: {ticketStatus}</p>

          <div className="chat-box">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`msg-row ${msg.from === 'admin' ? 'admin-row' : 'user-row'}`}
              >
                {msg.from === 'admin' && (
                  <img src={adminImg} alt="admin" className="msg-avatar" />
                )}
                <div className={`msg-bubble ${msg.from}`}>
                  <strong>{msg.from === 'admin' ? 'Admin' : 'You'}:</strong> {msg.text}
                </div>
                {msg.from === 'user' && (
                  <img src={userImg} alt="user" className="msg-avatar" />
                )}
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
    </div>
  );
};

export default TicketView;
