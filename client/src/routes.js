import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./views/Dashboard/Dashboard";
import Upload from "./views/Upload/Upload";
import Folder from "./views/Folder/Folder";

export default () => (
  <Switch>
    <Route exact path="/user" component={Dashboard} />
    <Route path="/upload" component={Upload} />
    <Route path="/folder/:id" component={Folder} />
  </Switch>
);
