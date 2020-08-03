import React, { useContext } from "react";

import { UserContext } from "Contexts/User";

import "./style.scss";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div id="profile-page">
      <div className="profile-header">
        <div
          className="profile-cover"
          style={{ backgroundImage: `url(${user.cover})` }}
        />

        <div
          className="profile-avatar"
          style={{ backgroundImage: `url(${user.avatar})` }}
        />

        <div className="profile-name">{user.name}</div>
      </div>
    </div>
  );
};

export default Profile;
