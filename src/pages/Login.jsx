import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate, Link } from "react-router-dom";

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
      {/* Animated Background - Matching Home Page Theme */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-200">
                EduPlatform
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-white hover:text-gray-200 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/register"
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-200"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Form Container */}
      <div className="min-h-screen flex items-center justify-center p-4 pt-20">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Sign in to your account
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link 
                to="/register" 
                className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-200"
              >
                Create account
              </Link>
            </p>
          </div>
          
          {message && (
            <div className={`mt-6 p-4 rounded-lg text-center font-semibold ${
              message.includes("✅") 
                ? "bg-green-100 text-green-700 border border-green-200" 
                : "bg-red-100 text-red-700 border border-red-200"
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white/70">
            © 2024 EduPlatform. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Login;