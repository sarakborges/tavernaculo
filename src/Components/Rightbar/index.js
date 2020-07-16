import React, { useContext } from "react";

import Social from "Components/Social";

import { UserContext } from "Contexts/User";

import "./style.scss";

const Rightbar = () => {
  const { isRightBarExpanded } = useContext(UserContext);

  return (
    <div id="rightbar" className={!isRightBarExpanded ? "sidebar_hidden" : ""}>
      <Social />
    </div>
  );
};

export default Rightbar;
