import React, { useReducer, createContext } from "react";

const UserContext = createContext();
const UserDispatchContext = createContext();

const INITIAL_STATE = {
  isBarExpanded: true,
  areLightsOff: false,
};

export const userReducer = (state, { type, data }) => {
  switch (type) {
    case "SET_IS_BAR_EXPANDED": {
      return { ...state, isBarExpanded: data };
    }

    case "SET_ARE_LIGHTS_OFF": {
      return { ...state, areLightsOff: data };
    }

    default: {
      throw new Error(`Unknown type ${type} reducer on UserReducer`);
    }
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

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
