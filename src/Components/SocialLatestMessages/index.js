import React, { useContext } from "react";

import "./style.scss";

import { SocialDispatchContext } from "Contexts/Social";

const SocialLatestMessages = () => {
  const socialReducer = useContext(SocialDispatchContext);

  const messages = [];

  for (let i = 0; i < 15; i++) {
    messages.push({
      id: i,
      avatar: `https://cdn.discordapp.com/attachments/705087703200432219/705088849885265938/valeera.png`,
      name: `Runawer`,
      sender: `you`,
      message: `Olar, lindeza. Queria dizer que te achei uma lindeza.`,
      time: `2min`,
    });
  }

  return (
    <ul className="latest-messages">
      {messages.map((item) => {
        return (
          <li
            className="message-item"
            key={`social-latest-${item.id}`}
            onClick={() => {
              socialReducer({ type: "SET_ACTIVE_MENU", data: "chat" });
            }}
          >
            <div
              className="message-avatar"
              style={{
                backgroundImage: `url('${item.avatar}')`,
              }}
            />

            <div className="message-info">
              <div className="message-sender">
                <span>{item.name}</span>
                <a href="#">Ver perfil</a>
              </div>

              <div className="message-body">
                <div className="message-text">
                  {item.sender === "you" && (
                    <span className="message-text-prefix">Você: </span>
                  )}
                  <span className="message-text-content">{item.message}</span>
                </div>

                <div className="message-time">{item.time}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLatestMessages;
