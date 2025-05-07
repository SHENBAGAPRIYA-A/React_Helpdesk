// import React, { useState } from 'react';
// import './Admin.css';
// import userImg from '../assets/user-image.png'

// const ChatWindow = ({ user }) => {
//   const [messages, setMessages] = useState([
//     { id: 1, text: 'Hi!', sender: 'user' },
//     { id: 2, text: 'Hello, how can I help?', sender: 'admin' },
//     { id: 3, text: 'I need assistance with my ticket.', sender: 'user' },
//   ]);
//   const [newMsg, setNewMsg] = useState('');

//   const sendMessage = () => {
//     if (newMsg.trim()) {
//       setMessages([...messages, { id: messages.length + 1, text: newMsg, sender: 'admin' }]);
//       setNewMsg('');
//     }
//   };

//   return (
//     <div className="chat-window">
//       <div className="chat-header">
//         <img class="user"src={userImg} alt={user.name} />
//         <h4>{user.name}</h4>
//       </div>
//       <div className="chat-messages">
//         {messages.map((msg) => (
//           <div key={msg.id} className={`message ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="chat-input">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMsg}
//           onChange={(e) => setNewMsg(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;

import React, { useState } from 'react';
import './Admin.css';
import userImg from '../assets/user-image.png';
import adminImg from '../assets/admin-image.png'; // Add admin image too

const ChatWindow = ({ user }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi!', sender: 'user' },
    { id: 2, text: 'Hello, how can I help?', sender: 'admin' },
    { id: 3, text: 'I need assistance with my ticket.', sender: 'user' },
  ]);
  const [newMsg, setNewMsg] = useState('');

  const sendMessage = () => {
    if (newMsg.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMsg, sender: 'admin' }]);
      setNewMsg('');
    }
  };

  return (
    <div className="adchat-window">
      <div className="adchat-header">
        <img className="adchat-user-avatar" src={userImg} alt={user.name} />
        <h4>{user.name}</h4>
      </div>

      <div className="adchat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`adchat-message-row ${msg.sender === 'admin' ? 'adchat-admin' : 'adchat-user'}`}
          >
            {msg.sender === 'user' && (
              <img src={userImg} alt="User" className="adchat-avatar" />
            )}
            <div className="adchat-message">{msg.text}</div>
            {msg.sender === 'admin' && (
              <img src={adminImg} alt="Admin" className="adchat-avatar" />
            )}
          </div>
        ))}
      </div>

      <div className="adchat-input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="adchat-input"
        />
        <button onClick={sendMessage} className="adchat-send-btn">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
