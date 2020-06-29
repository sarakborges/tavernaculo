import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Error from "Containers/Error";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default Routes;
