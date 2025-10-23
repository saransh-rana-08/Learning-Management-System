import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      console.log('🔍 DEBUG: Starting login process...');

      const token = await loginUser(formData.email, formData.password);
      console.log('🔍 DEBUG: Received token:', token);

      localStorage.setItem("token", token);

      // Decode and inspect the token
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log('🔍 DEBUG: Full token payload:', payload);
        console.log('🔍 DEBUG: All keys in payload:', Object.keys(payload));
        console.log('🔍 DEBUG: Role value from token:', payload.role);
        console.log('🔍 DEBUG: Type of role:', typeof payload.role);

        const role = payload.role || "STUDENT";
        console.log('🔍 DEBUG: Final role to be used:', role);

        setMessage("✅ Login successful!");
        setTimeout(() => {
          console.log('🔍 DEBUG: Navigating with role:', role);
          if (role === "FACULTY" || role === "faculty" || role === "Faculty") {
            console.log('🔍 DEBUG: Redirecting to faculty dashboard');
            navigate("/faculty/dashboard");
          } else {
            console.log('🔍 DEBUG: Redirecting to student dashboard');
            navigate("/student/dashboard");
          }
        }, 1000);

      } catch (decodeError) {
        console.error('🔍 DEBUG: Token decoding error:', decodeError);
        setMessage("❌ Token error!");
      }

    } catch (err) {
      console.error('🔍 DEBUG: Login API error:', err);
      setMessage("❌ Invalid credentials!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="animated-background"></div>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <div className="button-loader">
                <div className="loader-spinner"></div>
                <span>Logging in...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
        {message && <p className="message">{message}</p>}
      </div>
    </>
  );
}

export default Login;