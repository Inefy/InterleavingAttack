import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  getMultiFactorResolver,
  PhoneMultiFactorGenerator,
  PhoneAuthProvider,
  RecaptchaVerifier
} from 'firebase/auth';
import { auth } from '../firebase';

auth.languageCode = 'en';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verificationMessage, setVerificationMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch('http://localhost:3001/login-data');
        if (response.ok) {
          const data = await response.json();
          if (data && data.username && data.password) {
            setUsername(data.username);
            setPassword(data.password);
            // Optionally, automatically attempt login
            attemptLogin(data.username, data.password);
          }
        } else {
          console.error('Failed to retrieve login data');
        }
      } catch (error) {
        console.error('Error retrieving login data:', error);
      }
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const attemptLogin = async (username, password) => {
    try {
      await signInWithEmailAndPassword(auth, username, password);
      navigate('/userprofile');
    } catch (error) {
      handleFirebaseAuthError(error);
    }
  };

  const handleFirebaseAuthError = (error) => {
    if (error.code === 'auth/multi-factor-auth-required') {
      const resolver = getMultiFactorResolver(auth, error);
      const phoneInfoOptions = {
        multiFactorHint: resolver.hints[0],
        session: resolver.session
      };
      const phoneAuthProvider = new PhoneAuthProvider(auth);
      const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

      phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier)
        .then(verificationId => {
          // Handle the verification code input and sign in
          const verificationCode = window.prompt('Enter the verification code sent to your phone:');
          const cred = PhoneAuthProvider.credential(verificationId, verificationCode);
          const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);

          return resolver.resolveSignIn(multiFactorAssertion);
        })
        .then(() => {
          navigate('/userprofile');
        })
        .catch(console.error);
    } else {
      console.error('Firebase authentication error:', error.message);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      console.error('Username and password are required');
      return;
    }
    await attemptLogin(username, password);
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
          <Link to="/signup">
            <button className="text-blue-500">Sign Up</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
