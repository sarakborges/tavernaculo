import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "Contexts/User";

import { weekDays, ROUTES } from "consts";

import Button from "Components/Button";
import Icon from "Components/Icon";

import "./style.scss";

const Profile = () => {
  const { user } = useContext(UserContext);

  const profile = {
    id: 2,
    name: `Yogg'Sara`,
    avatar: `https://cdn.discordapp.com/attachments/705087703200432219/714868759596367932/nidalee.png`,
    cover: `https://www.gamereactor.eu/media/97/entrevistawow_3059793b.jpg`,
    about: `Pellentesque pretium cursus hendrerit. Ut semper blandit sem sed imperdiet. Aliquam elementum ante ac tortor interdum, ut condimentum odio vehicula. Nunc a ullamcorper mi. Praesent efficitur augue quis purus sollicitudin rhoncus. Suspendisse at mi vitae sapien ultricies semper ullamcorper vitae diam. Proin ac purus ultrices, malesuada urna posuere, consequat nunc. Suspendisse porta, lorem eu auctor lobortis, urna arcu condimentum urna, nec eleifend ipsum lectus id neque. Cras interdum, lacus ac volutpat rutrum, risus elit malesuada neque, id tempor sapien eros faucibus nulla. Vivamus id congue nulla. Cras nisl felis, finibus eget commodo at, elementum vel tellus. Proin eget elit ac sem dapibus hendrerit. Mauris non urna id augue interdum pellentesque id eget dui. Suspendisse mi mauris, pellentesque quis neque vitae, maximus consectetur orci. Phasellus et facilisis eros, sed gravida arcu. Donec id auctor felis, nec scelerisque risus.
    
    Nullam eget auctor dui. Sed purus ex, porttitor eget lacus vitae, bibendum tristique libero. Sed suscipit nec velit elementum ultrices. Duis a erat finibus, accumsan tortor vel, ullamcorper nunc. Etiam vel volutpat lacus, ut lacinia est. Vivamus tincidunt volutpat dolor, at venenatis quam sagittis vel. Donec laoreet nisl vitae mattis ultricies. Sed tempor felis cursus sem accumsan pretium. Sed vitae gravida est, non porta velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi commodo, felis quis suscipit suscipit, quam sapien dapibus enim, at porta lectus sem quis massa. Nullam ultrices neque ipsum, eget mollis metus varius nec.`,
    favoriteSystems: ["FATE Core", "D&D 5e"],
    favoriteThemes: ["Fantasia", "Medieval", "Cyberpunk", "Super poderes"],
    isFollowing: true,
    userSince: `20/07/2020`,
    rating: 3,
    groups: [
      {
        id: 1,
        avatar: `https://i.pinimg.com/originals/07/82/ea/0782eab69709d1f48eff6e0d62c0994b.jpg`,
        name: `A CONQUISTA`,
        weekDay: 6,
        time: `20:00`,
        master: `Arthira`,
      },

      {
        id: 2,
        avatar: `https://static-cdn.jtvnw.net/jtv_user_pictures/326e2fac-4db2-4084-86f8-3d6f5866fdf2-profile_image-70x70.png`,
        name: `Tavernáculo`,
        weekDay: 3,
        time: `20:00`,
        master: `EduSpite`,
      },

      {
        id: 3,
        avatar: `https://img.redbull.com/images/c_crop,x_0,y_0,h_800,w_1200/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2019/01/31/4163d42d-8b63-4ecf-bd84-daaad1a2091c/novidades-pokemon`,
        name: `Pokémon Let's Go`,
        weekDay: 2,
        time: `20:00`,
        master: `KhaosCello`,
      },

      {
        id: 4,
        avatar: `https://imageyobleus.nyc3.cdn.digitaloceanspaces.com/community/17933/photo/gods-among-us-gau5f034f73279f6.png`,
        name: `DBZ`,
        weekDay: 1,
        time: `20:00`,
        master: `Schestatsky`,
      },
    ],
  };

  const getRating = () => {
    const stars = [];

    for (let i = 0; i < profile.rating; i++) {
      stars.push("star");
    }

    for (let i = 0; i < 5 - profile.rating; i++) {
      stars.push("star_border");
    }

    return stars.map((starItem) => {
      return (
        <Icon
          value={starItem}
          options={{ mini: true, classes: ["profile-rating-star"] }}
        />
      );
    });
  };

  return (
    <div id="profile-page">
      <div className="profile-header">
        <div
          className="profile-cover"
          style={{ backgroundImage: `url(${profile.cover})` }}
        />

        <div className="profile-header-inner">
          <div
            className="profile-avatar"
            style={{ backgroundImage: `url(${profile.avatar})` }}
          />

          <div className="profile-header-info">
            <div className="profile-title">{profile.name}</div>

            <div className="profile-actions">
              {profile.id !== user.id && (
                <Button
                  options={{
                    colorful: true,
                    classes: ["active"],
                  }}
                >
                  Enviar mensagem
                </Button>
              )}

              {profile.id !== user.id && profile.isFollowing && (
                <Button
                  options={{
                    colorful: true,
                    classes: ["active", "profile-unfollow"],
                  }}
                >
                  Deixar de seguir
                </Button>
              )}

              {profile.id !== user.id && !profile.isFollowing && (
                <Button
                  options={{
                    colorful: true,
                    classes: ["active"],
                  }}
                >
                  Seguir
                </Button>
              )}

              {profile.id === user.id && (
                <Button
                  options={{
                    colorful: true,
                    classes: ["active"],
                  }}
                >
                  Editar perfil
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

      <div className="profile-body">
        <div className="profile-body-item">
          <b>Membro desde:</b> {profile.userSince}
        </div>

        <div className="profile-body-item profile-rating">
          <b>Avaliação:</b>
          {getRating().map((starItem) => {
            return starItem;
          })}
        </div>

        <div className="profile-body-item profile-body-item-full">
          <b>Sistemas preferidos:</b>
          {" " + profile.favoriteSystems.join(", ")}
        </div>

        <div className="profile-body-item profile-body-item-full">
          <b>Temáticas preferidas:</b>
          {" " + profile.favoriteThemes.join(", ")}
        </div>
      </div>

      <div
        className="profile-about"
        dangerouslySetInnerHTML={{
          __html: profile.about.replaceAll("\n", "<br>"),
        }}
      />

      <div className="profile-groups">
        <div className="profile-groups-title">
          Grupos que <span>{profile.name}</span> participa
        </div>

        <div className="profile-groups-list">
          {profile.groups.map((groupItem) => {
            return (
              <div
                className="group-item"
                key={`profile-groups-${groupItem.id}`}
              >
                <div
                  className="group-avatar"
                  style={{ backgroundImage: `url(${groupItem.avatar})` }}
                />

                <div className="group-text">
                  <div className="group-title">{groupItem.name}</div>

                  <div className="group-week-day">
                    {weekDays[groupItem.weekDay].name}s, às {groupItem.time}
                  </div>

                  <div className="group-master">
                    Narrador: <b>{groupItem.master}</b>
                  </div>

                  <div className="group-see">
                    <Link to={ROUTES.GROUP.replace(groupItem.id)}>
                      Ver grupo
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

export default Profile;
