import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "consts";

import "./style.scss";

import { SocialContext, SocialDispatchContext } from "Contexts/Social";

const SocialLatestMessages = () => {
  const { filter } = useContext(SocialContext);
  const socialReducer = useContext(SocialDispatchContext);

  const messages = [];

  for (let i = 0; i < 15; i++) {
    messages.push({
      id: i,
      user: {
        id: 1,
        avatar: `https://cdn.discordapp.com/attachments/705087703200432219/705088849885265938/valeera.png`,
        name: `Runawer`,
      },
      sender: `you`,
      message: `Olar, lindeza. Queria dizer que te achei uma lindeza.`,
      time: `2min`,
    });
  }

  return (
    <ul className="latest-messages">
      {messages.map((messageItem) => {
        return (
          (!filter ||
            messageItem.name
              .toLocaleLowerCase("pt-br")
              .includes(filter.toLocaleLowerCase("pt-br"))) && (
            <li
              className="message-item"
              key={`social-latest-${messageItem.id}`}
              onClick={() => {
                socialReducer({ type: "SET_ACTIVE_MENU", data: "chat" });
              }}
            >
              <div
                className="message-avatar"
                style={{
                  backgroundImage: `url('${messageItem.user.avatar}')`,
                }}
              />

              <div className="message-info">
                <div className="message-sender">
                  <span>{messageItem.user.name}</span>
                  <Link
                    to={ROUTES.PROFILE.replace(messageItem.user.id)}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Ver perfil
                  </Link>
                </div>

                <div className="message-body">
                  <div className="message-text">
                    {messageItem.sender === "you" && (
                      <span className="message-text-prefix">Você: </span>
                    )}
                    <span className="message-text-content">
                      {messageItem.message}
                    </span>
                  </div>

                  <div className="message-time">{messageItem.time}</div>
                </div>
              </div>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default SocialLatestMessages;
