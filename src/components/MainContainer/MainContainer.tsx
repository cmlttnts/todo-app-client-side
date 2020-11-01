import AppContext from "context/appContext";
import React, { useContext } from "react";

const MainContainer = () => {
  const appData = useContext(AppContext);
  console.log(appData);

  return <div className="MainContainer">Hello MainContainer</div>;
};

export default MainContainer;
