import React, { useContext } from "react";

import Button from "Components/Button";
import Icon from "Components/Icon";

import { UserContext, UserDispatchContext } from "Contexts/User";

import "./style.scss";

const ToggleTheme = () => {
  const { areLightsOff } = useContext(UserContext);
  const userReducer = useContext(UserDispatchContext);

  const toggleTheme = () => {
    if (areLightsOff) {
      userReducer({ type: "SET_ARE_LIGHTS_OFF", data: false });
      document.body.classList.remove("lightsoff");
    } else {
      userReducer({ type: "SET_ARE_LIGHTS_OFF", data: true });
      document.body.classList.add("lightsoff");
    }
  };

  return (
    <div className="toggle-theme">
      <div className="toggle-theme-title">
        {!areLightsOff && "A luz! Ela queima meus olhos! Faça algo! RÁPIDO!"}
        {areLightsOff && "Entendemos se as trevas não forem para todos..."}
      </div>

      <Button classes={["toggle-theme-action"]} onClick={toggleTheme} round>
        {!areLightsOff && (
          <>
            <span></span>
            <span>Ativar modo escuro</span>
            <Icon value="brightness_3" small />
          </>
        )}

        {areLightsOff && (
          <>
            <span></span>
            <span>Ativar o modo chato</span>
            <Icon value="wb_sunny" small />
          </>
        )}
      </Button>
    </div>
  );
};

export default ToggleTheme;
