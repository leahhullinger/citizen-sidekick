import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { signoutUser } from '../state/user/user-actions';

const Signout 

const Auth = (props) => {
  return (
    <Switch>
      <Route path="/signout" exact render
    </Switch>
  )
};

const dispatchToProps = dispatch => {
  return {
    userSignout: () => dispatch(signoutUser())
  };
};

export default connect(
  () => {},
  dispatchToProps
)(Auth);
