import React from "react";

import Icon from "Components/Icon";

import "./style.scss";

const GroupArea = ({ group }) => {
  const weekDays = [
    {
      index: 0,
      name: "Segunda",
    },
    {
      index: 1,
      name: "Terça",
    },
    {
      index: 2,
      name: "Quarta",
    },
    {
      index: 3,
      name: "Quinta",
    },
    {
      index: 4,
      name: "Sexta",
    },
    {
      index: 5,
      name: "Sábado",
    },
    {
      index: 6,
      name: "Domingo",
    },
  ];

  return (
    <div className="group-space">
      <div
        className="group-avatar"
        style={{ backgroundImage: `url(${group.avatar})` }}
      ></div>

      <div className="group-text">
        <div className="group-name">{group.name}</div>
        <div className="group-time">
          {weekDays[group.weekDay].name}, às {group.time}
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
