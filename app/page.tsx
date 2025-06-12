"use client";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <p className="text-lg mb-8">This is the landing page of our application.</p>
      <a href="/dashboard" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Go to Dashboard
      </a>
    </div>
  );
}
 
export default LandingPage;