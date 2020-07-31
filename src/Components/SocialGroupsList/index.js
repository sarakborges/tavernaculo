import React from "react";

import "./style.scss";

const SocialGroupsList = () => {
  const groups = [];

  for (let i = 0; i < 20; i++) {
    groups.push({
      id: 1,
      name: `Midnight Club`,
      avatar: `https://imageyobleus.nyc3.cdn.digitaloceanspaces.com/community/205545/photo/midnight-club5ef8cdfe8ef10.png`,
    });
  }

  return (
    <div className="social-groups">
      <ul className="groups-list">
        {groups.map((groupItem) => {
          return (
            <li className="group-item" key={`social-groups-${groupItem.id}`}>
              <div
                className="group-avatar"
                style={{ backgroundImage: `url(${groupItem.avatar})` }}
              />

              <div className="group-name">{groupItem.name}</div>

              <a href="#" className="group-view">
                Ver grupo
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialGroupsList;
