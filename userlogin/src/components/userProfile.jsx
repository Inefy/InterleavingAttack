import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // If a user is signed in, update the state with user data
      if (user) {
        setUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          // Add more user information here
        });
      } else {
        // If no user is signed in, redirect to the login page
        navigate('/login');
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [auth, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-black">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl mb-4">User Profile</h1>
        {user && (
          <div className="mb-4">
            <strong>Name:</strong> {user.displayName}
          </div>
        )}
        {user && (
          <div className="mb-4">
            <strong>Email:</strong> {user.email}
          </div>
        )}
        {/* Add more user information here */}
        <button onClick={handleLogout} className="w-full py-3 bg-red-500 text-white rounded-lg">
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
