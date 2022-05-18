import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Profile from 'pages/Profile/Profile';
import Login from 'pages/Auth/Login/Login';
import Signup from 'pages/Auth/Signup/Signup';
import Detail from 'pages/Detail/Detail';
import HashTags from './Hashtags/Hashtags';
import Modify from './Profile/Modify';

const AppRouter = ({ isLoggedIn, userObj }) => {
  //const user = JSON.parse(localStorage.getItem('user'));

  if (userObj) {
    //userObj = user;
    console.log('AppRouter', userObj);
  }
  return (
    <>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} />
            </Route>
            <Route path="/profile/modify">
              <Modify userObj={userObj}></Modify>
            </Route>
            <Route exact path="/hashtag">
              <HashTags userObj={userObj} />
            </Route>
            <Route path="/boards/:boardId">
              <Detail userObj={userObj} />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </>
        )}
      </Switch>
    </>
  );
};

export default AppRouter;

/*라우팅 수정 필요*/
