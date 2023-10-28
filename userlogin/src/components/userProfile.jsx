import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();

  // Replace this with your user data or retrieve it from an API
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    // Add more user information here
  };

  const handleLogout = () => {
    navigate('/userlogin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-black">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl mb-4">User Profile</h1>
        <div className="mb-4">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {user.email}
        </div>
        {/* Add more user information here */}
        <button onClick={handleLogout} className="w-full py-3 bg-red-500 text-white rounded-lg">
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
