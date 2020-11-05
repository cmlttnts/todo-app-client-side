import styled from "@emotion/styled";
import React from "react";
import { TabType } from "types";

type Props = {
  tab: TabType | undefined;
};

const TabContainer = ({ tab }: Props) => {
  if (!tab) {
    return null;
  }
  return <TabS>{tab.todos}</TabS>;
};

export default TabContainer;

const TabS = styled.div`
  width: 100vw;
`;
