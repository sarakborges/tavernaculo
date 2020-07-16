import React, { useState, useContext } from "react";

import Icon from "Components/Icon";
import Button from "Components/Button";

import { UserContext, UserDispatchContext } from "Contexts/User";

import "./style.scss";

const Schedule = () => {
  const { isLeftBarExpanded } = useContext(UserContext);
  const userReducer = useContext(UserDispatchContext);

  const [scheduleDetails, setScheduleDetails] = useState(undefined);

  const schedule = [
    {
      id: 1,
      avatar: `https://i.pinimg.com/originals/07/82/ea/0782eab69709d1f48eff6e0d62c0994b.jpg`,
      name: `A CONQUISTA`,
      weekDay: `3`,
      time: `19:00`,
    },
  ];

  return (
    <div id="schedule">
      <div className="sidebar-title">
        <div className="title-text">Próximos jogos</div>

        {!isLeftBarExpanded && (
          <Icon
            small
            as="button"
            value="subdirectory_arrow_right"
            onClick={() => {
              userReducer({ type: "SET_IS_LEFTBAR_EXPANDED", data: true });
            }}
          />
        )}
        {isLeftBarExpanded && (
          <Icon
            small
            as="button"
            value="subdirectory_arrow_left"
            onClick={() => {
              userReducer({ type: "SET_IS_LEFTBAR_EXPANDED", data: false });
            }}
          />
        )}
      </div>

      <div className="schedule-list">
        {!isLeftBarExpanded && (
          <div className="schedule-item">
            <Icon small value="date_range" />
          </div>
        )}

        {!isLeftBarExpanded &&
          schedule.map((scheduleItem, scheduleKey) => {
            return (
              <div className="schedule-item" key={scheduleKey}>
                <Button
                  onClick={() => {
                    setScheduleDetails((state) =>
                      state !== scheduleItem.id ? scheduleItem.id : undefined
                    );
                  }}
                >
                  <div
                    className="schedule-item-img"
                    style={{
                      backgroundImage: `url('${scheduleItem.avatar}')`,
                    }}
                  />
                </Button>

                {scheduleDetails === scheduleItem.id && (
                  <div className="schedule-detail"></div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Schedule;
