import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    // Send credentials to your server
    try {
      const response = await fetch('http://localhost:3001/login-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        console.log('Credentials sent successfully');
        // Add any additional actions post-login here
        // Example: navigate to another page
        navigate('/somePage'); // Update with your desired route
      } else {
        console.error('Failed to send credentials');
      }
    } catch (error) {
      console.error('Error sending credentials:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl mb-4">User Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full py-2 px-3 rounded-lg mb-4 border-none bg-gray-200"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2 px-3 rounded-lg mb-4 border-none bg-gray-200"
          />
          <button type="submit" className="w-full py-3 bg-black text-white rounded-lg mb-2">
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 mb-2">
          <Link to="/forgotpassword" className="text-blue-500">
            Forgot Password?
          </Link>
        </p>
        <p className="text-center text-gray-500">
          <Link to="/signup">
            <button className="text-blue-500">Sign Up</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
