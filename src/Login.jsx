
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./Login.css";
import { FaHeadset } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  // Predefined credentials
  const credentials = {
    admin: { email: "admin@example.com", password: "admin123" },
    student: { email: "student@example.com", password: "student123" },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const valid = credentials[role];
    if (email === valid.email && password === valid.password) {
      if (role === "admin") navigate("/admin-dashboard");
      else navigate("/dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="page-container">
      <Header />
      <div className="auth-container">
        <form onSubmit={handleLogin} className="auth-form">
          <h2 className="auth-title"><FaHeadset/> HelpDesk Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            className="auths-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
          <button className="auths-button ">Login</button>
          <p className="text-center mt-4">
            Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
