import React, { useContext } from "react";

import { UserContext } from "Contexts/User";

import Button from "Components/Button";
import Icon from "Components/Icon";
import UserArea from "Components/UserArea";
import Schedule from "Components/Schedule";
import ToggleTheme from "Components/ToggleTheme";

import "./style.scss";

const Leftbar = () => {
  const { isLeftBarExpanded, user } = useContext(UserContext);

  return (
    <div id="leftbar" className={!isLeftBarExpanded ? "sidebar_hidden" : ""}>
      <div className="sidebar-top">
        <UserArea user={user} />

        <Button options={{ round: true, classes: ["new-group"] }}>
          <Icon value="add" options={{ small: true }} />
          <span>Criar novo grupo</span>
          <span></span>
        </Button>

        <Schedule />
      </div>

      <div className="sidebar-bottom">
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Leftbar;
