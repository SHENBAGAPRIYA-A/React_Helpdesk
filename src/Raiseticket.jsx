import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import UserProfileDrawer from "./Userprofiledrawer";
import './index.css';

const RaiseTicket = () => {
  const [form, setForm] = useState({
    subject: '',
    description: '',
    priority: 'Low',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ticket submitted:', form);
    alert("Ticket Raised Successfully!");
    navigate('/tickets');
  };

  const handleCancel = () => {
    navigate('/tickets');
  };

  return (
    <div className="main-layout">
      <Sidebar />
      <UserProfileDrawer />
      <div className="content">
        <h2 className="title">Raise a Ticket</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">Issue</label>
          <input
            name="subject"
            placeholder="Subject"
            className="form-input"
            onChange={handleChange}
            required
          />

          <label className="form-label">Description</label>
          <textarea
            name="description"
            placeholder="Describe your issue"
            className="form-textarea"
            rows="5"
            onChange={handleChange}
            required
          />


          <div className="button-group">
            <button type="submit" className="btn btn-raise">Raise</button>
            <button type="button" className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RaiseTicket;
