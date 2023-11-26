import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  getMultiFactorResolver,
  PhoneMultiFactorGenerator,
  PhoneAuthProvider,
  RecaptchaVerifier,
} from 'firebase/auth';
import { auth } from '../firebase';

auth.languageCode = 'en';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationMessage, setVerificationMessage] = useState(null);
  const navigate = useNavigate();
  const ws = new WebSocket('ws://localhost:3001'); // Establish WebSocket connection

  useEffect(() => {
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setUsername(data.username);
      setPassword(data.password);
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      navigate('/userprofile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray">
      <div id="recaptcha-container"></div>
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl mb-4">User Login</h1>
        {verificationMessage && <p className="mb-4 text-blue-500">{verificationMessage}</p>}
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
