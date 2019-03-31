import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import DashRouter from './views/Dashboard/DashRouter';
import './App.css';

class App extends Component {
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
