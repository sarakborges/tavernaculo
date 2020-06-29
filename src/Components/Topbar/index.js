import React from "react";

import Icon from "Components/Icon";

import "./style.scss";

const Topbar = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("lightsoff");
  };

  return (
    <div id="topbar">
      <div className="logo" />

      <Icon as="button" value="emoji_objects" onClick={toggleTheme} />
    </div>
  );
};

export default Topbar;
