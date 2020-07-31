import React from "react";

import Icon from "Components/Icon";

import "./style.scss";

const SocialContactsList = () => {
  const contacts = [];

  for (let i = 0; i < 20; i++) {
    contacts.push({
      id: 1,
      name: `Runawer`,
      avatar: `https://cdn.discordapp.com/attachments/705087703200432219/705088849885265938/valeera.png`,
    });
  }

  return (
    <div className="social-contacts">
      <ul className="contacts-list">
        {contacts.map((contactItem) => {
          return (
            <li
              className="contact-item"
              key={`social-contacts-${contactItem.id}`}
            >
              <div
                className="contact-avatar"
                style={{ backgroundImage: `url(${contactItem.avatar})` }}
              />

              <div className="contact-text">
                <div className="contact-name">{contactItem.name}</div>

                <a href="#" className="contact-view">
                  Ver perfil
                </a>
              </div>

              <Icon
                value="more_vert"
                options={{ as: "button", small: true, transparent: true }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialContactsList;
