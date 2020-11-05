import MainTabs from "components/MainTabs/MainTabs";
import TabContainer from "components/TabContainer/TabContainer";
import AppContext from "context/appContext";
import React, { useContext, useState } from "react";

const MainContainer = () => {
  const { appData } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState<string>(appData.tabs[0]?.name || "");

  return (
    <div className="MainContainer">
      <MainTabs
        tabNames={appData.tabs.map(tab => tab.name)}
        activeTabName={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContainer tab={appData.tabs.find(tab => tab.name === activeTab)} />
    </div>
  );
};

export default MainContainer;
