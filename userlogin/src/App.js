import React from 'react';
import {Routes, Route } from 'react-router-dom';
import UserLogin from './components/userLogin.jsx';
import UserProfile from './components/userProfile.jsx';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<UserLogin/>}/>
      <Route path="/userlogin" element={<UserLogin/>}/>
      <Route path="/userprofile" element={<UserProfile/>}/>
    </Routes>
    </div>
  );
}

export default App;
