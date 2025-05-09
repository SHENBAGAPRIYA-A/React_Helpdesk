import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaHeadset } from "react-icons/fa";

import "./Signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    address: "",
    userType: "Candidate",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="page-container">
      <Header />
      <div className="auth-container">
        <form onSubmit={handleSignup} className="auth-form">
          <h2 className="auth-title"><FaHeadset/> HelpDesk SignUp</h2>

          <div className="form-group">
            <label>Full Name</label>
            <div className="input-icon">
              
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email address</label>
            <div className="input-icon">
              
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-icon">
              
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <small>Password must be at least 8 characters long</small>
          </div>

          <div className="forms-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Address</label>
            <div className="input-icon">
              
              <input
                type="text"
                name="address"
                placeholder="123 Main St, City, Country"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="forms-group">
            <label>User Type</label>
            <select name="userType" value={formData.userType} onChange={handleChange}>
              <option value="Candidate">Candidate</option>
              <option value="Admin">Admin</option>
              <option value="Student">Student</option>
            </select>
          </div>

          <button type="submit" className="auths-button ">Sign up</button>
          <p className="text-center mt-4">
            Already have an account? <Link to="/login" className="auth-link">Login</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
