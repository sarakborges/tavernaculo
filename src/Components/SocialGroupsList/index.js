import React, { useContext } from "react";

import { SocialContext } from "Contexts/Social";

import Icon from "Components/Icon";

import "./style.scss";

const SocialGroupsList = () => {
  const groups = [];

  const { filter } = useContext(SocialContext);

  for (let i = 0; i < 20; i++) {
    groups.push({
      id: i,
      name: `Midnight Club`,
      avatar: `https://imageyobleus.nyc3.cdn.digitaloceanspaces.com/community/205545/photo/midnight-club5ef8cdfe8ef10.png`,
    });
  }

  return (
    <div className="social-groups">
      <ul className="groups-list">
        {groups.map((groupItem) => {
          return (
            (!filter ||
              groupItem.name
                .toLocaleLowerCase("pt-br")
                .includes(filter.toLocaleLowerCase("pt-br"))) && (
              <li className="group-item" key={`social-groups-${groupItem.id}`}>
                <div
                  className="group-avatar"
                  style={{ backgroundImage: `url(${groupItem.avatar})` }}
                />

                <div className="group-text">
                  <div className="group-name">{groupItem.name}</div>

                  <a href="#" className="group-view">
                    Ver grupo
                  </a>
                </div>

                <Icon
                  value="more_vert"
                  options={{ as: "button", small: true, transparent: true }}
                />
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default SocialGroupsList;
