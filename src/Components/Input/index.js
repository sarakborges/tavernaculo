import React from "react";

import "./style.scss";

const Input = ({ onChange, placeholder, classes = [] }) => {
  classes.push("input");

  return (
    <input
      placeholder={placeholder || "Digite aqui"}
      className={classes.join(" ")}
      onChange={onChange}
    />
  );
};

export default Input;
