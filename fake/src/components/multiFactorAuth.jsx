import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, PhoneAuthProvider, MultiFactorSession, MultiFactorAssertion, enrollMultiFactor } from 'firebase/auth';

const MultiFactorAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();

  const handleEnableMFA = async () => {
    
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
