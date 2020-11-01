import reducer from "context/reducer";
import { getAppData } from "localStorageUtils";
import React, { createContext, useReducer } from "react";

const AppContext = createContext(getAppData());
export default AppContext;

export const AppContextProvider: React.FC = ({ children }) => {
  const [appData, appDispatch] = useReducer(reducer, getAppData());

  return <AppContext.Provider value={{ appData, appDispatch }}>{children}</AppContext.Provider>;
};
