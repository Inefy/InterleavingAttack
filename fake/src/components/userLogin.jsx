import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Collected Data:', { username, password });
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1>Phishing Simulation Login (Educational Use Only)</h1>
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
          Don't have an account?{' '}
          <Link to="/signup">
            <button className="text-blue-500">Sign Up</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
