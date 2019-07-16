import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import DashRouter from "./views/Dashboard/DashRouter/DashRouter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={DashRouter} />
        </Switch>
      </div>
    );
  }
}

export default App;
