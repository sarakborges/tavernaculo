import React, { useReducer, createContext } from "react";

const SocialContext = createContext();
const SocialDispatchContext = createContext();

const INITIAL_STATE = {
  activeMenu: "latest",
  filter: "",
};

export const socialReducer = (state, { type, data }) => {
  switch (type) {
    case "SET_ACTIVE_MENU": {
      return { ...state, activeMenu: data };
    }

    case "SET_FILTER": {
      return { ...state, filter: data };
    }

    default: {
      throw new Error(`Unknown type ${type} reducer on SocialReducer`);
    }
  }
};

export const SocialProvider = ({ children }) => {
  const [state, dispatch] = useReducer(socialReducer, INITIAL_STATE);

  return (
    <SocialContext.Provider value={state}>
      <SocialDispatchContext.Provider value={dispatch}>
        {children}
      </SocialDispatchContext.Provider>
    </SocialContext.Provider>
  );
};

export const SocialConsumer = SocialContext.Consumer;

export { SocialContext, SocialDispatchContext };
