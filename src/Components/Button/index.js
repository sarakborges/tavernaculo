import React from "react";

import "./style.scss";

const Button = ({ children, options }) => {
  let classes = ["button"];

  if (!!options?.classes) {
    classes = classes.concat(options?.classes);
  }

  if (!!options?.round) {
    classes.push("round");
  }

  if (!!options?.transparent) {
    classes.push("transparent");
  }

  return (
    <button
      type={options?.type || "button"}
      className={classes.join(" ")}
      onClick={options?.onClick}
    >
      {children}
    </button>
  );
};

export default Button;
