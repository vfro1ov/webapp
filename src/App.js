import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Header from './component/Header/Header'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <nav><Navbar /></nav>
      <Profile />
    </div>
  );
}

export default App;
