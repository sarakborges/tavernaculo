import React, { useContext } from "react";

import Button from "Components/Button";
import Icon from "Components/Icon";
import UserArea from "Components/UserArea";
import Schedule from "Components/Schedule";
import ToggleTheme from "Components/ToggleTheme";

import { UserContext } from "Contexts/User";

import "./style.scss";

const Leftbar = () => {
  const { isLeftBarExpanded } = useContext(UserContext);

  return (
    <div id="leftbar" className={!isLeftBarExpanded ? "sidebar_hidden" : ""}>
      <div className="sidebar-top">
        <UserArea />

        <Button round classes={["new-group"]}>
          <Icon value="add" small />
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
