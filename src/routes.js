import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ROUTES } from "consts";

import { UserProvider } from "Contexts/User";

import Leftbar from "Components/Leftbar";
import Rightbar from "Components/Rightbar";

import Profile from "Containers/Profile";
import Group from "Containers/Group";
import Error from "Containers/Error";

const Routes = () => {
  return (
    <Router>
      <UserProvider>
        <Leftbar />
        <Rightbar />

        <div className="app-content">
          <Switch>
            <Route path={ROUTES.PROFILE.url} component={Profile} exact />
            <Route path={ROUTES.GROUP.url} component={Group} exact />
            <Route path="*" component={Error} />
          </Switch>
        </div>
      </UserProvider>
    </Router>
  );
};

export default Routes;
