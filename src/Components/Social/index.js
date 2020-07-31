import React, { useContext } from "react";

import Icon from "Components/Icon";
import SocialMenu from "Components/SocialMenu";
import SocialLatestMessages from "Components/SocialLatestMessages";
import Chat from "Components/Chat";
import SocialContactsList from "Components/SocialContactsList";
import SocialGroupsList from "Components/SocialGroupsList";
import SocialFeed from "Components/SocialFeed";

import { UserContext, UserDispatchContext } from "Contexts/User";
import { SocialContext } from "Contexts/Social";

import "./style.scss";

const Social = () => {
  const { isRightBarExpanded } = useContext(UserContext);
  const userReducer = useContext(UserDispatchContext);

  const { activeMenu } = useContext(SocialContext);

  return (
    <div className="sidebar-top">
      <div className="sidebar-title">
        {!isRightBarExpanded && (
          <Icon
            value="subdirectory_arrow_left"
            options={{
              small: true,
              transparent: true,
              as: "button",
              onClick: () => {
                userReducer({ type: "SET_IS_RIGHTBAR_EXPANDED", data: true });
              },
            }}
          />
        )}
        {isRightBarExpanded && (
          <Icon
            value="subdirectory_arrow_right"
            options={{
              small: true,
              transparent: true,
              as: "button",
              onClick: () => {
                userReducer({ type: "SET_IS_RIGHTBAR_EXPANDED", data: false });
              },
            }}
          />
        )}

        <div className="title-text">Social</div>
      </div>

      {isRightBarExpanded && (
        <div className="social">
          <SocialMenu />

          {activeMenu === "latest" && <SocialLatestMessages />}
          {activeMenu === "chat" && <Chat />}
          {activeMenu === "contacts" && <SocialContactsList />}
          {activeMenu === "groups" && <SocialGroupsList />}
          {activeMenu === "feed" && <SocialFeed />}
        </div>
      )}
    </div>
  );
};

export default Social;
