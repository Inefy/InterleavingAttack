import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
    // Replace this with your user login logic

    if (username === 'admin' && password === 'admin') {
          navigate('/userprofile');
      
    }
    };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl mb-4">User Login</h1>
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
        <button onClick={handleLogin} className="w-full py-3 bg-black text-white rounded-lg">
      Login
    </button>
      </div>
    </div>
  );
};

export default UserLogin;
