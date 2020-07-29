import React, { useContext } from "react";

import Icon from "Components/Icon";
import SocialMenu from "Components/SocialMenu";
import LatestMessages from "Components/LatestMessages";
import Chat from "Components/Chat";

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

          {activeMenu === "latest" && <LatestMessages />}
          {activeMenu === "chat" && <Chat />}
        </div>
      )}
    </div>
  );
};

export default Social;
