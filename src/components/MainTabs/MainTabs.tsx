import styled from "@emotion/styled";
import AddTabButton from "components/Buttons/AddTabButton";
import TabButton from "components/Buttons/TabButton";
import React from "react";

type Props = {
  tabNames: string[];
  activeTabName: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const MainTabs = ({ tabNames, activeTabName, setActiveTab }: Props) => {
  return (
    <MainTabsS className="MainTabs">
      {tabNames.map(tn => (
        <TabButton
          onClick={() => setActiveTab(tn)}
          text={tn}
          isActive={tn === activeTabName}
          key={tn}
        />
      ))}
      <AddTabButton />
    </MainTabsS>
  );
};

export default MainTabs;

const MainTabsS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;
