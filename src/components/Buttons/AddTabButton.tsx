import styled from "@emotion/styled";
import { tabButtonStyle } from "components/Buttons/buttonsUtils";
import React from "react";
import { BsPlusSquareFill } from "react-icons/bs";

type Props = {
  onClick: () => void;
};

const AddTabButton = ({ onClick }: Props) => {
  return (
    <AddTabButtonS onClick={onClick}>
      <BsPlusSquareFill /> Add
    </AddTabButtonS>
  );
};

export default AddTabButton;

const AddTabButtonS = styled.button`
  ${tabButtonStyle};
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & > svg {
    margin-right: 5px;
  }
`;
