import styled from "@emotion/styled";
import React from "react";

type Props = {
  tabNames: Array<string>;
};

const MainTabs = ({ tabNames }: Props) => {
  return (
    <MainTabsS className="MainTabs">
      {tabNames.map(tn => (
        <button>{tn}</button>
      ))}
    </MainTabsS>
  );
};

export default MainTabs;

const MainTabsS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
