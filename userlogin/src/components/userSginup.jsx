import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';

import auth from '../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
        // Access the user from the userCredential object
        const user = userCredential.user;
  
        // Update the user's display name
        await updateProfile(user, {
          displayName: displayName,
        });
  
        // Navigate to the user profile page or any other desired route
        navigate('/userprofile');
      } catch (error) {
        console.error(error);
        // Handle signup errors, e.g., display an error message to the user
      }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl mb-4">Sign Up</h1>
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
        <button onClick={handleSignUp} className="w-full py-3 bg-blue-500 text-white rounded-lg mb-2">
          Sign Up
        </button>
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
