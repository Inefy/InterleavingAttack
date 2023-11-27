import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getMultiFactorResolver, PhoneMultiFactorGenerator, PhoneAuthProvider, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../firebase';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage(''); // Clear any previous error messages
    try {
      await signInWithEmailAndPassword(auth, username, password);
      navigate('/userprofile'); // Navigate to user profile page on successful login
    } catch (error) {
      console.error('Error during login:', error);
      if (error.code === 'auth/multi-factor-auth-required') {
        handleMultiFactorAuth(error);
      } else {
        setErrorMessage('Login failed. Please try again.'); // Set error message for other login errors
      }
    }
  };

  const handleMultiFactorAuth = async (error) => {
    try {
      const resolver = getMultiFactorResolver(auth, error);
      const phoneInfoOptions = {
        multiFactorHint: resolver.hints[0],
        session: resolver.session
      };
      const phoneAuthProvider = new PhoneAuthProvider(auth);
      const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container-id', undefined, auth);
      const verificationId = await phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier);
      const verificationCode = window.prompt('Enter the verification code sent to your phone:');
      if (!verificationCode) {
        throw new Error("Verification code not provided");
      }
      const cred = PhoneAuthProvider.credential(verificationId, verificationCode);
      const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);
      await resolver.resolveSignIn(multiFactorAssertion);
      navigate('/userprofile'); // Navigate to user profile page on successful MFA
    } catch (mfaError) {
      console.error('MFA Error:', mfaError);
      setErrorMessage('The authentication process could not be completed. Please try again.'); // Set error message for MFA errors
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray">
      <div id="recaptcha-container-id"></div> {/* Recaptcha container */}
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl mb-4">User Login</h1>
        {errorMessage && <p className="mb-4 text-red-500">{errorMessage}</p>}
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
      </div>
    </div>
  );
};

export default UserLogin;
