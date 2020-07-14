import React from "react";

import "./style.scss";

const Button = ({ type, classes = [], children, onClick, round }) => {
  classes.push("button");

  if (!!round) {
    classes.push("round");
  }

  return (
    <button
      type={type || "button"}
      className={classes.join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
