import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Header from './component/Header/Header';
import Dialogs from './component/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom'; 

function App(props) {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <nav><Navbar /></nav>

      <div className='appWrapperContent'>
        <Route component={Profile} path='/profile' />
        <Route path ='/dialogs'component={Dialogs} />
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
