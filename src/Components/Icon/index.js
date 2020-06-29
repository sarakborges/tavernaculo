import React from "react";

import Button from "Components/Button";

import "./style.scss";

const Icon = ({ as, value, big, small, onClick }) => {
  const classes = ["icon"];

  if (big) {
    classes.push("bigicon");
  } else if (small) {
    classes.push("smallicon");
  }

  return (
    <>
      {(!as || as === "div") && (
        <div className={classes.join(" ")}>{value}</div>
      )}

      {as === "button" && (
        <Button classes={classes} onClick={onClick}>
          {value}
        </Button>
      )}
    </>
  );
};

export default Icon;
