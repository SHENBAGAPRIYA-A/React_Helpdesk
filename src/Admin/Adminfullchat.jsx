import React, { useState } from 'react';
import Sidebar from './Sidebar';
import AdminProfile from './AdminProfile';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import './Admin.css';

const AdminFullChatPage = () => {
  const [activeChat, setActiveChat] = useState(null);

  const handleSelectChat = (chatUser) => {
    setActiveChat(chatUser);
  };

  return (
    <div className="full-chat-container">
      <Sidebar />
      <div className="chat-app">
        <AdminProfile />
        <div className="chat-body">
          <ChatList onSelectChat={handleSelectChat} />
          {activeChat ? (
            <ChatWindow user={activeChat} />
          ) : (
            <div className="chat-placeholder"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminFullChatPage;
