// import React from 'react';
// import './Admin.css';
// import Sidebar from '../Sidebar';
// 
// const chatUsers = [
//   { id: 1, name: 'Naina Chaudhary', lastMessage: 'Sahi h', date: '12/07/18', img: {userImg} },
//   { id: 2, name: 'Atul Chandra', lastMessage: 'Okay noted', date: '10/07/18', img: {userImg}},
//   { id: 3, name: 'Disha Bisht', lastMessage: 'Thanks!', date: '09/07/18', img: {userImg}},
// ];

// const ChatList = () => {
//   const handleClick = (userId) => {
//     alert(`Navigate to chat with user ID: ${userId}`);
//     // Navigate to /admin/chat/:userId (using React Router in full implementation)
//   };

//   return (
//     <Sidebar/>
//     <Header/>
//     <div className="chat-list">
//       {chatUsers.map((user) => (
//         <div key={user.id} className="chat-item" onClick={() => handleClick(user.id)}>
//           <img src={user.img} alt={user.name} />
//           <div className="chat-details">
//             <div className="chat-header">
//               <h4>{user.name}</h4>
//               <span className="chat-date">{user.date}</span>
//             </div>
//             <p className="chat-msg">{user.lastMessage}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ChatList;
import React from 'react';
import './Admin.css';
import userImg from '../assets/user-image.png'

const users = [
  { id: 1, name: 'John Smith', lastMessage: 'Hello there!', time: '10:24 AM' },
  { id: 2, name: 'Jane Doe', lastMessage: 'Can we reschedule?', time: '09:18 AM'},
  { id: 3, name: 'Robert', lastMessage: 'Done ✅', time: 'Yesterday'},
];

const ChatList = ({ onSelectChat }) => (
  <div className="chat-list-section">
    {users.map((user) => (
      <div key={user.id} className="chat-user" onClick={() => onSelectChat(user)}>
        <img className="usr"src={userImg} alt={user.name} />
        <div className="chat-info">
          <div className="chat-info-header">
            <h4>{user.name}</h4>
            <span>{user.time}</span>
          </div>
          <p>{user.lastMessage}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ChatList;
