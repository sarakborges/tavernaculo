import React, { useState, useContext } from "react";

import { UserContext, UserDispatchContext } from "Contexts/User";

import Icon from "Components/Icon";
import Button from "Components/Button";
import GroupArea from "Components/GroupArea";

import "./style.scss";

const Schedule = () => {
  const { isLeftBarExpanded } = useContext(UserContext);
  const userReducer = useContext(UserDispatchContext);

  let today = new Date();
  today = new Date(
    `${today.getFullYear()}-${`0${today.getMonth() + 1}`.substr(
      -2,
      2
    )}-${today.getDate()}`
  );
  today = today.getDay();

  const schedule = [];

  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 7; i++) {
      schedule.push({
        id: `${j}-${i}`,
        avatar: `https://i.pinimg.com/originals/07/82/ea/0782eab69709d1f48eff6e0d62c0994b.jpg`,
        name: `A CONQUISTA`,
        weekDay: i,
        time: `19:00`,
      });
    }
  }

  const weekDays = [
    {
      index: 0,
      name: "Segunda",
      events: [],
    },
    {
      index: 1,
      name: "Terça",
      events: [],
    },
    {
      index: 2,
      name: "Quarta",
      events: [],
    },
    {
      index: 3,
      name: "Quinta",
      events: [],
    },
    {
      index: 4,
      name: "Sexta",
      events: [],
    },
    {
      index: 5,
      name: "Sábado",
      events: [],
    },
    {
      index: 6,
      name: "Domingo",
      events: [],
    },
  ];

  const orderWeek = () => {
    const weekArr = [];

    for (let i = today; i < 7; i++) {
      weekArr.push(weekDays[i]);
    }
    for (let i = 0; i < today; i++) {
      weekArr.push(weekDays[i]);
    }

    weekArr.forEach((weekItem, weekItemKey) => {
      schedule.forEach((scheduleItem) => {
        if (scheduleItem.weekDay === weekItem.index) {
          weekArr[weekItemKey].events.push(scheduleItem);
        }
      });
    });

    return weekArr;
  };

  const [selectedDay, setSelectedDay] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const week = orderWeek();

  return (
    <div id="schedule">
      <div className="sidebar-title">
        <div className="title-text">Próximos jogos</div>

        {!isLeftBarExpanded && (
          <Icon
            value="subdirectory_arrow_right"
            options={{
              small: true,
              transparent: true,
              as: "button",
              onClick: () => {
                userReducer({ type: "SET_IS_LEFTBAR_EXPANDED", data: true });
              },
            }}
          />
        )}
        {isLeftBarExpanded && (
          <Icon
            value="subdirectory_arrow_left"
            options={{
              small: true,
              transparent: true,
              as: "button",
              onClick: () => {
                userReducer({ type: "SET_IS_LEFTBAR_EXPANDED", data: false });
              },
            }}
          />
        )}
      </div>

      <div className="schedule-menu">
        {weekDays.map((weekItem) => {
          return (
            <Button
              key={`schedule-week-item-${weekItem.index}`}
              options={{
                transparent: true,
                classes: [
                  "schedule-week-item",
                  !!selectedDay[weekItem.index] ? "active" : "",
                ],
                onClick: () => {
                  setSelectedDay(() =>
                    selectedDay.map((selectedDayItem, selectedDayIndex) => {
                      if (selectedDayIndex === weekItem.index) {
                        return !selectedDayItem;
                      } else {
                        return selectedDayItem;
                      }
                    })
                  );
                },
              }}
            >
              {weekItem.name.substr(0, 1)}
            </Button>
          );
        })}
      </div>

      <div className="schedule-events">
        {week.map((weekItem) => {
          return (
            weekItem.events.length > 0 &&
            !!selectedDay[weekItem.index] && (
              <ul
                className="schedule-list"
                key={`schedule-week-day-${weekItem.index}`}
              >
                <li className="event-day">{weekItem.name}</li>

                {weekItem.events.map((eventItem) => {
                  return (
                    !!selectedDay[eventItem.weekDay] &&
                    eventItem.weekDay === weekItem.index && (
                      <li
                        className="event-item"
                        key={`schedule-events-${eventItem.id}`}
                      >
                        <GroupArea group={eventItem} />
                      </li>
                    )
                  );
                })}
              </ul>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
