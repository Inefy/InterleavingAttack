import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { multiFactor, PhoneAuthProvider, PhoneMultiFactorGenerator,
  RecaptchaVerifier } from 'firebase/auth';

import auth from '../firebase';

const MultiFactorAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();

  const handleEnableMFA = async () => {
    // Get the user.
    
    const user = auth.currentUser;

    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container-id', undefined, auth);
    multiFactor(user).getSession()
    .then(function (multiFactorSession) {
        // Specify the phone number and pass the MFA session.
        const phoneInfoOptions = {
            phoneNumber: phoneNumber,
            session: multiFactorSession
        };

        const phoneAuthProvider = new PhoneAuthProvider(auth);

        // Send SMS verification code.
        return phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier);
    }).then(function (verificationId) {
        // Ask user for the verification code. Then:
        const cred = PhoneAuthProvider.credential(verificationId, verificationCode);
        const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);

        // Complete enrollment.
        return multiFactor(user).enroll(multiFactorAssertion, 'phone number label');
    });

  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray">
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
