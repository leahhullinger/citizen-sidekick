import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import DashRouter from './views/Dashboard/DashRouter';
import './App.css';
import FetchUsers from './state/graphql/fetch-users.graphql';
import apolloClient from './config';
import { Signup } from './components/Form/Signup';

class App extends Component {
  componentDidMount() {
    // apolloClient
    //   .query({
    //     query: FetchUsers,
    //     variables: {
    //       where: {}
    //     }
    //   })
    //   .then(res => console.log('apollo', res))
    //   .catch(e => console.log({ e }));
  }
  render() {
    return (
      <div className="App">
        <div className="body">
          <Switch>
            {/* !isAthenticated 
                  ? <Redirect to="/:path(login|authenticating|auth)" /> 
                  : "/" 
             */}
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={DashRouter} />
            <Route path="/signup" component={Signup} />
            {/*
             *  /dashboard
             *  /upload
             *  /folder/(add|:id)
             */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
