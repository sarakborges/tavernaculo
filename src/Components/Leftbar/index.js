import React, { useContext } from "react";

import Button from "Components/Button";
import Icon from "Components/Icon";
import UserArea from "Components/UserArea";
import Schedule from "Components/Schedule";
import ToggleTheme from "Components/ToggleTheme";

import { UserContext } from "Contexts/User";

import "./style.scss";

const Leftbar = () => {
  const { isBarExpanded } = useContext(UserContext);

  return (
    <div id="leftbar" className={!isBarExpanded ? "leftbar_hidden" : ""}>
      <div className="leftbar-top">
        <UserArea />

        <Button round classes={["new-group"]}>
          <Icon value="add" small />
          <span>Criar nova mesa</span>
          <span></span>
        </Button>

        <Schedule />
      </div>

      <div className="leftbar-bottom">
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Leftbar;
