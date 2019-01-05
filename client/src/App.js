import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import Dashboard from "./views/Dashboard/Dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
