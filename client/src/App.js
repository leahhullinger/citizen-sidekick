import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import { getCurrentUser } from './state/user/user-actions';
import { signoutUser, signinUser } from './state/user/user-actions';
import MainContainer from './views/main/main-container.js';
import { Auth } from './common/auth/component';

const AppAuthenticated = props => {
  const { match } = props;
  return (
    <Switch>
      <Route path={match.url} component={MainContainer} />
      {/*
       *  /dashboard
       *  /upload
       *  /folder/(add|:id)
       */}
    </Switch>
  );
};

const stateToProps = state => ({
  user: state.user
});

const dispatchToProps = dispatch => ({
  getUser: () => dispatch(getCurrentUser()),
  userSignout: () => dispatch(signoutUser()),
  userSignin: (email, password) => dispatch(signinUser(email, password))
});

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    const { user, userSignin } = this.props;
    return (
      <div className="App">
        <div className="body">
          <Switch>
            <Route
              path="/(home|signin|signout)"
              render={() => <Auth user={user} onSignin={userSignin} />}
            />
            {!!user && <Route exact path="/" component={AppAuthenticated} />}
            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(App)
);
