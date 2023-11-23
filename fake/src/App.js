import React from 'react';
import {Routes, Route } from 'react-router-dom';
import UserLogin from './components/userLogin.jsx';
import UserProfile from './components/userProfile.jsx';
import SignUp from './components/userSginup.jsx';
import ForgotPassword from './components/forgotpassoword.jsx';
import MultiFactorAuth from './components/multiFactorAuth.jsx';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<UserLogin/>}/>
      <Route path="/login" element={<UserLogin/>}/>
      <Route path="/userprofile" element={<UserProfile/>}/>
      <Route path="*" element={<h1>404 Not Found</h1>}/>
      <Route path="/Signup" element={<SignUp/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/multiauth" element={<MultiFactorAuth/>}/>
    </Routes>
    </div>
  );
}

export default App;
