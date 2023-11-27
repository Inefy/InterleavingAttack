import React, { useState } from 'react';
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

  auth.settings.appVerificationDisabledForTesting=false;
  // console.log(auth.settings.appVerificationDisabledForTesting);
  const handleLogin = async () => {
    const selectedIndex = 0;

    const recaptchaVerifier = await new RecaptchaVerifier(auth,'recaptcha-container',{"size":"invisible"});
    signInWithEmailAndPassword(auth, username, password)
    .then(function (userCredential) {
        // User is not enrolled with a second factor and is successfully
        // signed in.
        // ...
        navigate('/userprofile');
    })
    .catch(function (error) {
        if (error.code === 'auth/multi-factor-auth-required') {
            const resolver = getMultiFactorResolver(auth, error);
            // Ask user which second factor to use.
            if (resolver.hints[selectedIndex].factorId ===
                PhoneMultiFactorGenerator.FACTOR_ID) {
                const phoneInfoOptions = {
                    multiFactorHint: resolver.hints[selectedIndex],
                    session: resolver.session
                };
                const phoneAuthProvider = new PhoneAuthProvider(auth);
                // Send SMS verification code
                return phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier)
                    .then(function (verificationId) {
                        // Ask user for the SMS verification code. Then:
                        setVerificationMessage("Please check your phone for the verification code.");
                        const verificationCode = window.prompt('Enter the verification code that was sent to your phone:');


                        const cred = PhoneAuthProvider.credential(
                            verificationId, verificationCode);
                        const multiFactorAssertion =
                            PhoneMultiFactorGenerator.assertion(cred);
                        // Complete sign-in.
                        return resolver.resolveSignIn(multiFactorAssertion)
                    })
                    .then(function (userCredential) {
                        // User successfully signed in with the second factor phone number.
                        navigate('/userprofile');
                    });
            } else {
                // Unsupported second factor.

                recaptchaVerifier.clear();
            }
        } else if (error.code === 'auth/wrong-password') {
            // Handle other errors such as wrong password.
        }else{
          console.log(error);
        }
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray">
      <div id="recaptcha-container"></div>
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl mb-4">User Login</h1>
        {verificationMessage && <p className="mb-4 text-blue-500">{verificationMessage}</p>}
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
        {/* {verificationMessage && (
          <input
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="w-full py-2 px-3 rounded-lg mb-4 border-none bg-gray-200"
          />
        )} */}
        <button onClick={handleLogin} className="w-full py-3 bg-black text-white rounded-lg mb-2">
          Login
        </button>
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