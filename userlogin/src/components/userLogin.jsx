import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  PhoneAuthProvider, 
  getMultiFactorResolver,
  PhoneMultiFactorGenerator,
  TotpMultiFactorGenerator,
  getAuth,
  RecaptchaVerifier,
  
} from 'firebase/auth';

import {auth} from '../firebase';



// firebase.auth().languageCode = 'en';  
// firebase.auth().settings.appVerificationDisabledForTesting = true;
const UserLogin = () => {
  
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationMessage, setVerificationMessage] = useState(null);
  const navigate = useNavigate();

  const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      // ...
    }
  }, auth);



  const handleLogin = async () => {
    

    signInWithEmailAndPassword(auth, username, password)
    .then(function (userCredential) {
        // User is not enrolled with a second factor and is successfully
        // signed in.
        // ...

        navigate('/userprofile');
    })
    .catch(function (error) {
        if (error.code === 'auth/multi-factor-auth-required') {
            // User is enrolled with multi-factor auth but a second factor
            // is required to complete sign-in.
            const resolver = getMultiFactorResolver(auth,error);
            const multiFactorHints = resolver.hints;
            if (multiFactorHints[0].factorId==='phone') {
                const phoneInfoOptions = {
                    multiFactorHint: multiFactorHints[0],
                    session: resolver.session
                };
                const phoneAuthProvider = new PhoneAuthProvider();
                const phoneInfoAssertion = phoneAuthProvider.verifyPhoneNumber(
                    phoneInfoOptions,
                    recaptchaVerifier,
                    phoneInfoOptions
                ).then(function (verificationId) {
                    const verificationCode = window.prompt('Please enter the verification ' +
                        'code that was sent to your mobile device.');
                    const phoneAuthCredential = PhoneAuthProvider.credential(verificationId,
                        verificationCode);
                    const multiFactorAssertion =
                        PhoneMultiFactorGenerator.assertion(phoneAuthCredential);
                    return resolver.resolveSignIn(multiFactorAssertion);
                }).then(function () {
                  navigate('/userprofile');
                });
               
            }
            
            
        } else if (error.code === 'auth/wrong-password') {
            // Handle other errors such as wrong password.
        }
    });

    
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
      <div id="recaptcha-container"></div>
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
          <button onClick={handleSendVerificationEmail} className="w-full py-3 bg-gray-300 text-black rounded-lg mb-2" id='sign-in-button'>
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
