import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Animated Background */}
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
              <h1 className="text-2xl font-bold text-white">EduPlatform</h1>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="text-white hover:text-gray-200 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Login
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

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              EduPlatform
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your gateway to seamless learning and teaching experiences. 
            Join thousands of students and faculty members in our innovative educational ecosystem.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6l9-5M12 20l-9-5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">For Students</h3>
              <p className="text-white/80 text-sm">
                Access courses, submit assignments, and track your academic progress in one place.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">For Faculty</h3>
              <p className="text-white/80 text-sm">
                Manage courses, grade assignments, and engage with students through our intuitive platform.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast & Secure</h3>
              <p className="text-white/80 text-sm">
                Built with modern technology to ensure your data is safe and your experience is smooth.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/register"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Get Started Free
            </Link>
            <Link
              to="/login"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
            >
              Sign In
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-white/70 text-sm">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/70 text-sm">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-white/70 text-sm">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-white/70 text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white/70">
            © 2024 EduPlatform. All rights reserved. Built with ❤️ for better education.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;