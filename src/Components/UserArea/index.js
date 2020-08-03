import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "consts";

import Icon from "Components/Icon";

import "./style.scss";

const UserArea = ({ user }) => {
  return (
    <div className="user-space">
      <div
        className="user-avatar"
        style={{ backgroundImage: `url(${user.avatar})` }}
      ></div>

      <div className="user-text">
        <div className="user-name">{user.name}</div>
        <div className="user-link">
          <Link to={ROUTES.PROFILE.replace(user.id)}>Ver perfil</Link>
        </div>
      </div>

      <div className="user-more">
        <Icon
          value="more_vert"
          options={{ small: true, transparent: true, as: "button" }}
        />
      </div>
    </div>
  );
};

export default UserArea;
