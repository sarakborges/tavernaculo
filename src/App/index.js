import React from "react";

import Routes from "routes";

import Topbar from "Components/Topbar";
import Sidebar from "Components/Sidebar";

import "reset.scss";
import "./style.scss";

const App = () => {
  return (
    <>
      <Topbar />
      <Sidebar />

      <div className="app-content">
        <Routes />
      </div>
    </>
  );
};

export default App;
