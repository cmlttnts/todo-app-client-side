import Header from "components/Header/Header";
import MainContainer from "components/MainContainer/MainContainer";
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
};

export default React.memo(App);
