import React, { useContext } from "react";

import { SocialContext } from "Contexts/Social";

import UserArea from "Components/UserArea";
import Button from "Components/Button";
import Icon from "Components/Icon";
import Input from "Components/Input";

import "./style.scss";

const SocialFeed = () => {
  const feed = [];

  const { filter } = useContext(SocialContext);

  for (let i = 0; i < 3; i++) {
    feed.push({
      id: i,
      user: {
        avatar: `https://cdn.discordapp.com/attachments/705087703200432219/705088849885265938/valeera.png`,
        name: `Runawer`,
      },
      picture: `https://cdn.discordapp.com/attachments/705087703200432219/705088849885265938/valeera.png`,
      message: `fotinho <b>nova</b> amores`,
      time: `2min`,
      liked: true,

      commentaries: [
        {
          id: 1,
          user: {
            avatar: `https://cdn.discordapp.com/attachments/705087703200432219/714868759596367932/nidalee.png`,
            name: `Yogg'Sara`,
          },
          message: `<b>mt</b> gasosa`,
          time: `2min`,
        },

        {
          id: 2,
          user: {
            avatar: `https://cdn.discordapp.com/attachments/705087703200432219/705088849885265938/valeera.png`,
            name: `Runawer`,
          },
          message: `obg`,
          time: `2min`,
        },
      ],
    });
  }

  return (
    <div className="social-feed">
      <ul className="feed-list">
        {feed.map((feedItem) => {
          return (
            (!filter ||
              feedItem.user.name
                .toLocaleLowerCase("pt-br")
                .includes(filter.toLocaleLowerCase("pt-br")) ||
              feedItem.message
                .toLocaleLowerCase("pt-br")
                .includes(filter.toLocaleLowerCase("pt-br"))) && (
              <li className="feed-item" key={`social-feed-${feedItem.id}`}>
                <UserArea user={feedItem.user} />

                <div className="feed-separator" />

                <div className="feed-details">
                  {!!feedItem.picture && (
                    <div className="feed-item-image">
                      <img
                        src={feedItem.picture}
                        alt={`Imagem postada por ${feedItem.user.name}`}
                      />
                    </div>
                  )}

                  <div className="feed-item-actions">
                    <Button
                      options={{
                        classes: [
                          "feed-item-likes",
                          "feed-item-button",
                          feedItem.liked ? "action-done" : "",
                        ],
                        transparent: true,
                      }}
                    >
                      <Icon value="favorite" options={{ mini: true }} />
                      <span>17</span>
                    </Button>

                    <Button
                      options={{
                        classes: ["feed-item-shares", "feed-item-button"],
                        transparent: true,
                      }}
                    >
                      <Icon value="share" options={{ mini: true }} />
                      <span>1</span>
                    </Button>
                  </div>

                  <div className="feed-item-commentaries">
                    <div className="feed-item-commentary">
                      <div
                        className="feed-item-avatar"
                        style={{
                          backgroundImage: `url(${feedItem.user.avatar})`,
                        }}
                      />

                      <div
                        className="feed-item-message"
                        dangerouslySetInnerHTML={{
                          __html: feedItem.message,
                        }}
                      />

                      <div className="feed-item-time">{feedItem.time}</div>
                    </div>

                    <ul className="feed-item-commentaries-list">
                      {feedItem.commentaries.map((commentaryItem) => {
                        return (
                          <li
                            className="feed-item-commentary"
                            key={`social-feed-comment-${commentaryItem.id}`}
                          >
                            <div
                              className="feed-item-avatar"
                              style={{
                                backgroundImage: `url(${commentaryItem.user.avatar})`,
                              }}
                            />

                            <div
                              className="feed-item-message"
                              dangerouslySetInnerHTML={{
                                __html: commentaryItem.message,
                              }}
                            />

                            <div className="feed-item-time">
                              {commentaryItem.time}
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    <Input options={{ placeholder: "Comentar publicação" }} />
                  </div>
                </div>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default SocialFeed;
