import React from "react";

import Routes from "routes";

import Leftbar from "Components/Leftbar";

import { UserProvider } from "Contexts/User";

import "reset.scss";
import "./style.scss";

const App = () => {
  return (
    <UserProvider>
      <Leftbar />

      <div className="app-content">
        <Routes />
      </div>
    </UserProvider>
  );
};

export default App;
