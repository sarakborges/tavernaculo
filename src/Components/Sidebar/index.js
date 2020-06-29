import React, { useState } from "react";

import Icon from "Components/Icon";
import Button from "Components/Button";

import "./style.scss";

const Sidebar = () => {
  const [scheduleDetails, setScheduleDetails] = useState(undefined);
  const [isBarExpanded, setIsBarExpanded] = useState(true);

  const schedule = [
    {
      id: 1,
      avatar: `https://i.pinimg.com/originals/07/82/ea/0782eab69709d1f48eff6e0d62c0994b.jpg`,
      name: `A CONQUISTA`,
      weekDay: `3`,
      time: `19:00`,
    },
  ];

  const toggleBar = () => {
    setIsBarExpanded((state) => !state);
  };

  return (
    <div id="sidebar" className={!isBarExpanded && "sidebar_hidden"}>
      <div id="schedule">
        <div className="sidebar-title">
          <div className="title-text">Suas próximas mesas</div>

          {!isBarExpanded && (
            <Icon
              small
              as="button"
              value="subdirectory_arrow_right"
              onClick={toggleBar}
            />
          )}
          {isBarExpanded && (
            <Icon
              small
              as="button"
              value="subdirectory_arrow_left"
              onClick={toggleBar}
            />
          )}
        </div>

        <div className="schedule-list">
          {!isBarExpanded && (
            <div className="schedule-item">
              <Icon small value="date_range" />
            </div>
          )}

          {!isBarExpanded &&
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
                    <img src={scheduleItem.avatar} />
                  </Button>

                  {scheduleDetails === scheduleItem.id && (
                    <div className="schedule-detail"></div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
