import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Profile from 'pages/Profile/Profile';
import GlobalStyle from 'styles/globalStyles';
import Login from 'pages/Auth/Login/Login';
import Signup from 'pages/Auth/Signup/Signup';
import AppRouter from './pages/Router';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userObj = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (userObj) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setInit(true);
  }, []);

  return <>{init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : 'Initializing'}</>;
}

export default App;
