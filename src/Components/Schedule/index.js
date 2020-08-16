import React, { useState, useContext } from "react";

import { UserContext, UserDispatchContext } from "Contexts/User";

import { weekDays } from "consts";

import Icon from "Components/Icon";
import Button from "Components/Button";
import GroupArea from "Components/GroupArea";

import "./style.scss";
import { useEffect } from "react";

const Schedule = () => {
  const { isLeftBarExpanded } = useContext(UserContext);
  const userReducer = useContext(UserDispatchContext);
  const [week, setWeek] = useState([]);
  const [selectedDay, setSelectedDay] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  let today = new Date();
  today = new Date(
    `${today.getFullYear()}-${`0${today.getMonth() + 1}`.substr(
      -2,
      2
    )}-${today.getDate()}`
  );
  today = today.getDay();

  const schedule = [];
  for (let i = 0; i < 14; i++) {
    schedule.push({
      id: i,
      avatar: `https://i.pinimg.com/originals/07/82/ea/0782eab69709d1f48eff6e0d62c0994b.jpg`,
      name: `A CONQUISTA`,
      date: `2020-07-${10 + i}`,
      time: `${10 + i}:00`,
    });
  }

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
        const date = new Date(scheduleItem.date);
        const weekDay = date.getDay();

        if (weekDay === weekItem.index) {
          weekArr[weekItemKey].events.push({ ...scheduleItem, weekDay });
        }
      });

      weekItem.events.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        } else if (b.date > a.date) {
          return -1;
        } else {
          if (a.time > b.time) {
            return 1;
          } else if (b.time > a.time) {
            return -1;
          } else {
            return 0;
          }
        }
      });
    });

    return weekArr;
  };

  useEffect(() => {
    setWeek(() => orderWeek());
  }, []);

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
                colorful: true,
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
