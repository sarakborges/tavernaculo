import React, { useEffect, useReducer, createContext } from "react";

const UserContext = createContext();
const UserDispatchContext = createContext();

const INITIAL_STATE = {
  isLeftBarExpanded: true,
  isRightBarExpanded: true,
  areLightsOff: false,
};

export const userReducer = (state, { type, data }) => {
  switch (type) {
    case "SET_IS_LEFTBAR_EXPANDED": {
      return { ...state, isLeftBarExpanded: data };
    }

    case "SET_IS_RIGHTBAR_EXPANDED": {
      return { ...state, isRightBarExpanded: data };
    }

    case "SET_ARE_LIGHTS_OFF": {
      window.localStorage.setItem("areLightsOff", data);

      if (!data) {
        document.body.classList.remove("lightsoff");
      } else {
        document.body.classList.add("lightsoff");
      }

      return { ...state, areLightsOff: data };
    }

    default: {
      throw new Error(`Unknown type ${type} reducer on UserReducer`);
    }
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const checkTheme = () => {
    const { areLightsOff } = window.localStorage;

    if (!!areLightsOff && areLightsOff === "true") {
      dispatch({ type: "SET_ARE_LIGHTS_OFF", data: true });
    } else {
      dispatch({ type: "SET_ARE_LIGHTS_OFF", data: false });
    }
  };

  useEffect(() => {
    checkTheme();
  }, []);

  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;

export { UserContext, UserDispatchContext };
