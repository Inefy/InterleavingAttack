
// ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth} from '../firebase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setEmailSent(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl mb-4">Forgot Password</h1>
        {!emailSent ? (
          <>
            <p className="mb-4">Enter your email address to reset your password:</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-3 rounded-lg mb-4 border-none bg-gray-200"
            />
            <button onClick={handleForgotPassword} className="w-full py-3 bg-black text-white rounded-lg mb-2">
              Reset Password
            </button>
          </>
        ) : (
          <p>Password reset email sent. Check your email inbox.</p>
        )}
        <p className="text-center text-gray-500">
          <Link to="/login" className="text-blue-500">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
