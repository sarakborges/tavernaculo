import React, { useContext } from "react";

import Icon from "Components/Icon";
import Input from "Components/Input";

import { UserContext, UserDispatchContext } from "Contexts/User";

import "./style.scss";

const Social = () => {
  const { isRightBarExpanded } = useContext(UserContext);
  const userReducer = useContext(UserDispatchContext);

  return (
    <div className="sidebar-top">
      <div className="sidebar-title">
        {!isRightBarExpanded && (
          <Icon
            small
            as="button"
            value="subdirectory_arrow_left"
            onClick={() => {
              userReducer({ type: "SET_IS_RIGHTBAR_EXPANDED", data: true });
            }}
          />
        )}
        {isRightBarExpanded && (
          <Icon
            small
            as="button"
            value="subdirectory_arrow_right"
            onClick={() => {
              userReducer({ type: "SET_IS_RIGHTBAR_EXPANDED", data: false });
            }}
          />
        )}

        <div className="title-text">Social</div>
      </div>

      {isRightBarExpanded && (
        <div className="social">
          <div>
            <Input placeholder="Encontre pessoas ou grupos" />
          </div>

          <ul className="social-menu">
            <li className="social-menu-item">
              <Icon
                small
                classes={["social-menu-button", "active"]}
                as="button"
                value="chat_bubble"
              />
            </li>

            <li className="social-menu-item">
              <Icon
                small
                classes={["social-menu-button"]}
                as="button"
                value="person"
              />
            </li>

            <li className="social-menu-item">
              <Icon
                small
                classes={["social-menu-button"]}
                as="button"
                value="group"
              />
            </li>

            <li className="social-menu-item">
              <Icon
                small
                classes={["social-menu-button"]}
                as="button"
                value="view_list"
              />
            </li>
          </ul>

          <ul className="latest-messages">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => {
              return (
                <li className="message-item">
                  <div
                    className="message-avatar"
                    style={{
                      backgroundImage: `url('https://cdn.discordapp.com/attachments/705087703200432219/705088849885265938/valeera.png')`,
                    }}
                  />

                  <div className="message-info">
                    <div className="message-sender">
                      <a href="#">Runawer</a>
                    </div>

                    <div className="message-body">
                      <div className="message-text">
                        <b>Você:</b> Olar, lindeza. Queria dizer que te achei
                        uma lindeza.
                      </div>

                      <div className="message-time">2min</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Social;
