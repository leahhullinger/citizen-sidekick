import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../../views/Home/Home';
import { SigninForm } from '../../components/Form/Signin';
import { signoutUser, signinUser } from '../../state/user/user-actions';

export const Auth = ({ user, onSignin }) => {
  console.log({ user });
  return (
    <Switch>
      {!!user && <Redirect to="/" />}
      <Route path="/home" exact component={Home} />
      <Route
        path="/signin"
        exact
        render={() => <SigninForm onSignin={onSignin} />}
      />
    </Switch>
  );
};
