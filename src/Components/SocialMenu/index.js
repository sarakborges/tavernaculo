import React, { useContext } from "react";

import Icon from "Components/Icon";
import Input from "Components/Input";

import { SocialContext, SocialDispatchContext } from "Contexts/Social";

import "./style.scss";

const SocialMenu = () => {
  const { activeMenu } = useContext(SocialContext);
  const socialReducer = useContext(SocialDispatchContext);

  const menu = [
    {
      name: "latest",
      icon: "chat_bubble",
    },

    {
      name: "contacts",
      icon: "person",
    },

    {
      name: "groups",
      icon: "group",
    },

    {
      name: "feed",
      icon: "view_list",
    },
  ];

  const changeSocialMenu = (item) => {
    socialReducer({ type: "SET_ACTIVE_MENU", data: item });
  };

  return (
    <>
      <ul className="social-menu">
        {menu.map((item) => {
          return (
            <li
              className="social-menu-item"
              key={`social-menu-button-${item.name}`}
            >
              <Icon
                value={item.icon}
                options={{
                  small: true,
                  as: "button",
                  classes: [
                    "social-menu-button",
                    activeMenu === item.name ? "active" : "",
                  ],
                  onClick: () => {
                    changeSocialMenu(item.name);
                  },
                }}
              />
            </li>
          );
        })}
      </ul>

      {activeMenu !== "chat" && (
        <div className="social-find">
          <Input options={{ placeholder: "Encontre pessoas ou grupos" }} />
        </div>
      )}
    </>
  );
};

export default SocialMenu;
