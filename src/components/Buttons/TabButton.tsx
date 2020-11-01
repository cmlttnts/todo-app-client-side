import styled from "@emotion/styled";
import { tabButtonStyle } from "components/Buttons/buttonsUtils";
import React from "react";

type Props = {
  isActive: boolean;
  onClick: () => void;
  text: string;
};

const TabButton = ({ isActive, onClick, text }: Props) => {
  return (
    <TabButtonS isActive={isActive} onClick={onClick}>
      {text}
    </TabButtonS>
  );
};

export default TabButton;

type StyledProps = {
  isActive: boolean;
};

const TabButtonS = styled.button`
  ${tabButtonStyle};
  color: black;
  background-color: ${(props: StyledProps) => (props.isActive ? "white" : "grey")};
`;
