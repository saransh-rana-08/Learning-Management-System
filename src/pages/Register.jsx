import React, { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";
//import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('🔍 DEBUG: Registration data being sent:', formData);

      const response = await registerUser(formData);
      console.log('🔍 DEBUG: Registration API response:', response);

      setMessage("✅ Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error('🔍 DEBUG: Registration error:', err);
      setMessage("❌ Registration failed! Please try again.");
    }
  };

  return (
    <>
      <div className="animated-background"></div>
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <div className="form-select-wrapper">
            <label className="form-label">Select Role</label>
            <select
              name="role"
              className="form-select"
              onChange={handleChange}
              required
              value={formData.role}
            >
              <option value="">Choose your role...</option>
              <option value="STUDENT">STUDENT</option>
              <option value="FACULTY">FACULTY</option>
            </select>
          </div>

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
        {message && <p className="message">{message}</p>}
      </div>
    </>
  );
}

export default Register;