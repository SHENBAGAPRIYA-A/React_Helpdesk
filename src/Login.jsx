// import { useState } from "react";
// import { Link,useNavigate } from 'react-router-dom';

// import "./App.css";


// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Logging in:", { email, password });
//     navigate("/dashboard");
//   };
  
//   return (
//     <div className="auth-container">
//       <form onSubmit={handleLogin} className="auth-form">
//         <h2 className="auth-title">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           className="auth-input"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="auth-input"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button className="auth-button login-button">Login</button>
//         <p className="text-center mt-4">
//           Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
//         </p>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import "./App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Predefined credentials for admin and student
  const adminEmail = 'admin@example.com';  // Replace with your admin email
  const adminPassword = 'admin123';  // Replace with your admin password
  const studentEmail = 'student@example.com';  // Replace with a student's email
  const studentPassword = 'student123';  // Replace with a student's password

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });

    // Check if the credentials match the admin or student
    if (email === adminEmail && password === adminPassword) {
      navigate("/admin-dashboard");  // Redirect to admin dashboard
    } else if (email === studentEmail && password === studentPassword) {
      navigate("/dashboard");  // Redirect to student dashboard
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-form">
        <h2 className="auth-title">Login</h2>
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
        <button className="auth-button login-button">Login</button>
        <p className="text-center mt-4">
          Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
