import React from 'react';
import {Routes, Route } from 'react-router-dom';
import UserLogin from './components/userLogin.jsx';
import UserProfile from './components/userProfile.jsx';
import SignUp from './components/userSginup.jsx';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<UserLogin/>}/>
      <Route path="/login" element={<UserLogin/>}/>
      <Route path="/userprofile" element={<UserProfile/>}/>
      <Route path="*" element={<h1>404 Not Found</h1>}/>
      <Route path="/Signup" element={<SignUp/>}/>
    </Routes>
    </div>
  );
}

export default App;
