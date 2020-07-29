import React, { useContext } from "react";

import Social from "Components/Social";

import { UserContext } from "Contexts/User";
import { SocialProvider } from "Contexts/Social";

import "./style.scss";

const Rightbar = () => {
  const { isRightBarExpanded } = useContext(UserContext);

  return (
    <div id="rightbar" className={!isRightBarExpanded ? "sidebar_hidden" : ""}>
      <SocialProvider>
        <Social />
      </SocialProvider>
    </div>
  );
};

export default Rightbar;
