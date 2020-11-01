import React from "react";
import { TabType } from "types";

type Props = {
  tab: TabType | undefined;
};

const TabContainer = ({ tab }: Props) => {
  if (!tab) {
    return null;
  }
  return <div className="TabContainer">{tab.todos}</div>;
};

export default TabContainer;
