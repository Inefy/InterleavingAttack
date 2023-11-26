import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log('Collected Data:', { email, password, displayName, phoneNumber });
    alert(`Collected Data: Email: ${email}, Password: ${password}, Display Name: ${displayName}, Phone Number: ${phoneNumber}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1>Phishing Simulation Sign Up (Educational Use Only)</h1>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full py-2 px-3 rounded-lg mb-4 border-none bg-gray-200"
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2 px-3 rounded-lg mb-4 border-none bg-gray-200"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2 px-3 rounded-lg mb-4 border-none bg-gray-200"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full py-2 px-3 rounded-lg mb-4 border-none bg-gray-200"
          />
          <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg mb-2">
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500">
          Already have an account?{' '}
          <Link to="/login">
            <button className="text-blue-500">
              Log In
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
