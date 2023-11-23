import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import auth from '../firebase';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  getAdditionalUserInfo,
  onAuthStateChanged,
} from 'firebase/auth';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationMessage, setVerificationMessage] = useState(null);
  
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (username) {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (user && !user.emailVerified) {
  //         setVerificationMessage('Please verify your email. Check your inbox for a verification email.');
  //       } else {
  //         setVerificationMessage(null);
  //       }
  //     });
  
  //     return () => unsubscribe();
  //   }
  // }, [username]);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;
      const additionalUserInfo = getAdditionalUserInfo(userCredential);
      
      if (additionalUserInfo?.isNewUser) {
        // Navigate to the user profile page or any other desired route
        navigate('/userprofile');
      } else {
        // Navigate to the user profile page or any other desired route
        navigate('/userprofile');
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, username);
      alert('Password reset email sent. Check your email inbox.');
    } catch (error) {
      console.log(error);
    }
  }

  const handleSendVerificationEmail = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await sendEmailVerification(user);
        alert('Verification email sent. Check your email inbox.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl mb-4">User Login</h1>
        {verificationMessage && (
          <div className="mb-4 text-red-500">{verificationMessage}</div>
        )}
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
        <button onClick={handleLogin} className="w-full py-3 bg-black text-white rounded-lg mb-2">
          Login
        </button>
        <p className="text-center text-gray-500 mb-2">
          <Link to="/forgotpassword" onClick={handleForgotPassword} className="text-blue-500">
            Forgot Password?
          </Link>
        </p>
        {verificationMessage && (
          <button onClick={handleSendVerificationEmail} className="w-full py-3 bg-gray-300 text-black rounded-lg mb-2">
            Resend Verification Email
          </button>
        )}
        <p className="text-center text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup">
            <button className="text-blue-500">
              Sign Up
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
