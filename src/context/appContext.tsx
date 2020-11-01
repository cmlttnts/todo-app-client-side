import reducer from "context/reducer";
import { getAppData } from "localStorageUtils";
import React, { createContext, useReducer } from "react";
import { AppContextType } from "types";

const AppContext = createContext<AppContextType>({
  appData: getAppData(),
  appDispatch: () => null
});
export default AppContext;

export const AppContextProvider: React.FC = ({ children }) => {
  const [appData, appDispatch] = useReducer(reducer, getAppData());

  return <AppContext.Provider value={{ appData, appDispatch }}>{children}</AppContext.Provider>;
};
