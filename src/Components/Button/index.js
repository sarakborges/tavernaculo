import React from "react";

import "./style.scss";

const Button = ({ type, classes = [], children, onClick }) => {
  classes.push("button");

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
