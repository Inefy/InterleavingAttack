import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { multiFactor, PhoneAuthProvider, PhoneMultiFactorGenerator,
  RecaptchaVerifier } from 'firebase/auth';

import { auth } from '../firebase';

const MultiFactorAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();

  const handleEnableMFA = async () => {
    // Ensure the user is already signed in
    const user = auth.currentUser;
    if (!user) {
      console.error('User not signed in');
      return;
    }

    // Initialize reCAPTCHA verifier
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

    try {
      const multiFactorSession = await multiFactor(user).getSession();
      const phoneInfoOptions = {
        phoneNumber: phoneNumber,
        session: multiFactorSession
      };

      const phoneAuthProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier);

      // Prompt for verification code
      const code = window.prompt('Enter the verification code sent to your phone:');
      const cred = PhoneAuthProvider.credential(verificationId, code);
      const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);

      await multiFactor(user).enroll(multiFactorAssertion, 'phone number label');
      navigate('/someRoute'); // Navigate to desired route on success
    } catch (error) {
      console.error('Error enabling MFA:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray">
      <div id="recaptcha-container"></div> {/* Recaptcha container */}
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl mb-4">Enable SMS Verification</h1>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full py-2 px-3 rounded-lg mb-4 border-none bg-gray-200"
        />
        <button
          onClick={handleEnableMFA}
          className="w-full py-3 bg-blue-500 text-white rounded-lg mb-2"
        >
          Enable SMS Verification
        </button>
      </div>
    </div>
  );
};

export default MultiFactorAuth;
