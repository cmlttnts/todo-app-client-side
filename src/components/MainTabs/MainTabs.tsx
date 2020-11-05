import styled from "@emotion/styled";
import AddTabButton from "components/Buttons/AddTabButton";
import TabButton from "components/Buttons/TabButton";
import AddTabModal from "components/Modals/AddTabModal";
import PortalModal from "components/Modals/PortalModal";
import React, { useState } from "react";

type Props = {
  tabNames: string[];
  activeTabName: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const MainTabs = ({ tabNames, activeTabName, setActiveTab }: Props) => {
  const [showAddTabModal, setShowAddTabModal] = useState(false);
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
      <AddTabButton
        onClick={() => {
          setShowAddTabModal(true);
        }}
      />
      <PortalModal active={showAddTabModal}>
        <AddTabModal
          onCancel={() => {
            setShowAddTabModal(false);
          }}
        />
      </PortalModal>
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
