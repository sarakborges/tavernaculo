import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "Contexts/User";

import { ROUTES } from "consts";

import Button from "Components/Button";
import Icon from "Components/Icon";

import "./style.scss";

const Group = () => {
  const { user } = useContext(UserContext);

  const group = {
    id: 1,
    name: `A CONQUISTA`,
    avatar: `https://i.pinimg.com/originals/07/82/ea/0782eab69709d1f48eff6e0d62c0994b.jpg`,
    cover: `https://i.ytimg.com/vi/WqWp3LKyRHY/maxresdefault.jpg`,
    about: `Pellentesque pretium cursus hendrerit. Ut semper blandit sem sed imperdiet. Aliquam elementum ante ac tortor interdum, ut condimentum odio vehicula. Nunc a ullamcorper mi. Praesent efficitur augue quis purus sollicitudin rhoncus. Suspendisse at mi vitae sapien ultricies semper ullamcorper vitae diam. Proin ac purus ultrices, malesuada urna posuere, consequat nunc. Suspendisse porta, lorem eu auctor lobortis, urna arcu condimentum urna, nec eleifend ipsum lectus id neque. Cras interdum, lacus ac volutpat rutrum, risus elit malesuada neque, id tempor sapien eros faucibus nulla. Vivamus id congue nulla. Cras nisl felis, finibus eget commodo at, elementum vel tellus. Proin eget elit ac sem dapibus hendrerit. Mauris non urna id augue interdum pellentesque id eget dui. Suspendisse mi mauris, pellentesque quis neque vitae, maximus consectetur orci. Phasellus et facilisis eros, sed gravida arcu. Donec id auctor felis, nec scelerisque risus.
    
    Nullam eget auctor dui. Sed purus ex, porttitor eget lacus vitae, bibendum tristique libero. Sed suscipit nec velit elementum ultrices. Duis a erat finibus, accumsan tortor vel, ullamcorper nunc. Etiam vel volutpat lacus, ut lacinia est. Vivamus tincidunt volutpat dolor, at venenatis quam sagittis vel. Donec laoreet nisl vitae mattis ultricies. Sed tempor felis cursus sem accumsan pretium. Sed vitae gravida est, non porta velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi commodo, felis quis suscipit suscipit, quam sapien dapibus enim, at porta lectus sem quis massa. Nullam ultrices neque ipsum, eget mollis metus varius nec.`,
    creator: 2,
    system: "FATE Core",
    themes: ["Medieval", "Fantasia"],
    isIn: true,
    createdAt: `20/07/2020`,
    users: [
      {
        id: 1,
        name: `Yogg'Sara`,
        avatar: `https://cdn.discordapp.com/attachments/705087703200432219/714868759596367932/nidalee.png`,
      },

      {
        id: 2,
        name: `Runawer`,
        avatar: `https://cdn.discordapp.com/attachments/705087703200432219/705088849885265938/valeera.png`,
      },
    ],
  };

  return (
    <div id="group-page">
      <div className="group-header">
        <div
          className="group-cover"
          style={{ backgroundImage: `url(${group.cover})` }}
        />

        <div className="group-header-inner">
          <div
            className="group-avatar"
            style={{ backgroundImage: `url(${group.avatar})` }}
          />

          <div className="group-header-info">
            <div className="group-title">{group.name}</div>

            <div className="group-actions">
              {group.isIn && (
                <>
                  <Button
                    options={{
                      colorful: true,
                      classes: ["active"],
                    }}
                  >
                    Enviar mensagem
                  </Button>

                  <Button
                    options={{
                      colorful: true,
                      classes: ["active", "group-leave"],
                    }}
                  >
                    Deixar grupo
                  </Button>
                </>
              )}

              {!group.isIn && (
                <Button
                  options={{
                    colorful: true,
                    classes: ["active"],
                  }}
                >
                  Participar do grupo
                </Button>
              )}

              {group.creator === user.id && (
                <Button
                  options={{
                    colorful: true,
                    classes: ["active"],
                  }}
                >
                  Editar grupo
                </Button>
              )}

              <Icon
                value="more_vert"
                options={{
                  as: "button",
                  transparent: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="group-body">
        <div className="group-body-item">
          <b>Grupo formado em:</b> {group.createdAt}
        </div>

        <div className="group-body-item group-body-item-full">
          <b>Sistemas:</b>
          {" " + group.system}
        </div>

        <div className="group-body-item group-body-item-full">
          <b>Temáticas:</b>
          {" " + group.themes.join(", ")}
        </div>
      </div>

      <div
        className="group-about"
        dangerouslySetInnerHTML={{
          __html: group.about.replaceAll("\n", "<br>"),
        }}
      />

      <div className="group-groups">
        <div className="group-groups-title">
          Participantes de <span>{group.name}</span>
        </div>

        <div className="group-groups-list">
          {group.users.map((userItem) => {
            return (
              <div className="group-item" key={`group-groups-${userItem.id}`}>
                <div
                  className="group-avatar"
                  style={{ backgroundImage: `url(${userItem.avatar})` }}
                />

                <div className="group-text">
                  <div className="group-title">{userItem.name}</div>

                  <div className="group-see">
                    <Link to={ROUTES.PROFILE.replace(userItem.id)}>
                      Ver perfil
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Group;
