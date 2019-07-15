import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import DashRouter from "./views/Dashboard/DashRouter/DashRouter";
import Upload from "./views/Upload/Upload";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/upload" component={Upload} />
        <div className="body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={DashRouter} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
