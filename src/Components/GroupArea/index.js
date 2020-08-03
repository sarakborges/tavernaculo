import React from "react";

import Icon from "Components/Icon";

import "./style.scss";

const GroupArea = ({ group }) => {
  return (
    <div className="group-space">
      <div
        className="group-avatar"
        style={{ backgroundImage: `url(${group.avatar})` }}
      ></div>

      <div className="group-text">
        <div className="group-name">{group.name}</div>
        <div className="group-time">
          {group.date.split("-").reverse().join("/")} - {group.time}
        </div>
      </div>

      <div className="group-more">
        <Icon
          value="more_vert"
          options={{ small: true, transparent: true, as: "button" }}
        />
      </div>
    </div>
  );
};

export default GroupArea;
