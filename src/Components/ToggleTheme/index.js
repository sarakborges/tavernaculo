import React, { useContext } from "react";

import Button from "Components/Button";
import Icon from "Components/Icon";

import { UserContext, UserDispatchContext } from "Contexts/User";

import "./style.scss";

const ToggleTheme = () => {
  const { areLightsOff } = useContext(UserContext);
  const userReducer = useContext(UserDispatchContext);

  const toggleTheme = () => {
    userReducer({ type: "SET_ARE_LIGHTS_OFF", data: !areLightsOff });
  };

  return (
    <div className="toggle-theme">
      <div className="toggle-theme-title">
        {!areLightsOff && "A luz! Ela queima meus olhos! Faça algo! RÁPIDO!"}
        {areLightsOff && "Entendemos se as trevas não forem para todos..."}
      </div>

      <Button
        options={{
          round: true,
          classes: ["toggle-theme-action"],
          onClick: toggleTheme,
        }}
        round
      >
        {!areLightsOff && (
          <>
            <span></span>
            <span>Ativar modo escuro</span>
            <Icon options={{ small: true }} value="brightness_3" />
          </>
        )}

        {areLightsOff && (
          <>
            <span></span>
            <span>Ativar o modo chato</span>
            <Icon options={{ small: true }} value="wb_sunny" />
          </>
        )}
      </Button>
    </div>
  );
};

export default ToggleTheme;
