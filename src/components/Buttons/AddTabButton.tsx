import styled from "@emotion/styled";
import { tabButtonStyle } from "components/Buttons/buttonsUtils";
import { addTab } from "context/actions";
import AppContext from "context/appContext";
import React, { useContext } from "react";
import { BsPlusSquareFill } from "react-icons/bs";

let counter = 1;

const AddTabButton = () => {
  const { appDispatch } = useContext(AppContext);

  return (
    <AddTabButtonS
      onClick={() => {
        console.log(counter);

        appDispatch(addTab(`Tab${counter++}`));
      }}>
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
