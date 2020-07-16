import React from "react";

import Icon from "Components/Icon";

import "./style.scss";

const UserArea = () => {
  const user = {
    id: 1,
    name: `Yogg'Sara`,
    avatar: `https://cdn.discordapp.com/attachments/705087703200432219/714868759596367932/nidalee.png`,
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
