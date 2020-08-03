import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "consts";

import { SocialContext, SocialDispatchContext } from "Contexts/Social";

import Icon from "Components/Icon";

import "./style.scss";

const SocialContactsList = () => {
  const contacts = [];

  const { filter } = useContext(SocialContext);
  const socialReducer = useContext(SocialDispatchContext);

  for (let i = 0; i < 20; i++) {
    contacts.push({
      id: i,
      name: `Runawer`,
      avatar: `https://cdn.discordapp.com/attachments/705087703200432219/705088849885265938/valeera.png`,
    });
  }

  return (
    <div className="social-contacts">
      <ul className="contacts-list">
        {contacts.map((contactItem) => {
          return (
            (!filter ||
              contactItem.name
                .toLocaleLowerCase("pt-br")
                .includes(filter.toLocaleLowerCase("pt-br"))) && (
              <li
                className="contact-item"
                key={`social-contacts-${contactItem.id}`}
                onClick={() => {
                  socialReducer({ type: "SET_ACTIVE_MENU", data: "chat" });
                }}
              >
                <div
                  className="contact-avatar"
                  style={{ backgroundImage: `url(${contactItem.avatar})` }}
                />

                <div className="contact-text">
                  <div className="contact-name">{contactItem.name}</div>

                  <Link
                    to={ROUTES.PROFILE.replace(contactItem.id)}
                    className="contact-view"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Ver perfil
                  </Link>
                </div>

                <Icon
                  value="more_vert"
                  options={{ as: "button", small: true, transparent: true }}
                />
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default SocialContactsList;
