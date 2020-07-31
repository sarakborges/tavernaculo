import React from "react";

import UserArea from "Components/UserArea";
import Icon from "Components/Icon";
import Input from "Components/Input";

import "./style.scss";

const Chat = () => {
  const user = {
    id: 2,
    name: `Runawer`,
    avatar: `https://cdn.discordapp.com/attachments/705087703200432219/705088849885265938/valeera.png`,
    chat: [],
  };

  for (let i = 1; i <= 4; i++) {
    if (i % 2 !== 0) {
      user.chat.push({
        id: i,
        message: `Olar, lindeza. Queria dizer que te achei uma lindeza.`,
        time: `2min`,
        sender: `not-you`,
      });
    } else {
      user.chat.push({
        id: i,
        message: `Nosa, que honra. Vc tb é uma lindeza.`,
        time: `32s`,
        sender: `you`,
      });
    }
  }

  return (
    <div className="chat">
      <UserArea user={user} />

      <div className="chat-separator" />

      <ul className="chat-messages">
        {user.chat.map((item) => {
          return (
            <li
              className={[
                "message-item",
                item.sender === "you" ? "message-from-you" : "",
              ].join(" ")}
              key={`social-chat-message-from-${user.id}-to-1-${item.id}`}
            >
              <div className="message-body">
                <div className="message-text">{item.message}</div>
                <div className="message-options">
                  <Icon
                    value="more_vert"
                    options={{
                      as: "button",
                      small: true,
                      transparent: true,
                    }}
                  />
                </div>
              </div>
              <div className="message-time">{item.time}</div>
            </li>
          );
        })}
      </ul>

      <div className="chat-send-message">
        <Input options={{ placeholder: `Converse com ${user.name}` }} />
      </div>
    </div>
  );
};

export default Chat;
