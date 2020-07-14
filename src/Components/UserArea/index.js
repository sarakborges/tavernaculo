import React from "react";

import Icon from "Components/Icon";

import "./style.scss";

const UserArea = () => {
  const user = {
    id: 1,
    name: `Yogg'Sara`,
    avatar: `https://cdn.discordapp.com/avatars/183653516429099009/205b1d4b0c570eb7e983fe98252bbf21.png?size=2048`,
  };

  return (
    <div className="user-space">
      <div
        className="user-avatar"
        style={{ backgroundImage: `url(${user.avatar})` }}
      ></div>

      <div className="user-text">
        <div className="user-name">{user.name}</div>
        <div className="user-link">
          <a href="#">Ver perfil</a>
        </div>
      </div>

      <div className="user-more">
        <Icon as="button" value="more_horiz" small />
      </div>
    </div>
  );
};

export default UserArea;
