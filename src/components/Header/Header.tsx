import styled from "@emotion/styled";
import Button from "components/Buttons/Button";
import { deleteAllTabs } from "context/actions";
import AppContext from "context/appContext";
import React, { useContext } from "react";

const Header = () => {
  const { appDispatch } = useContext(AppContext);
  return (
    <HeaderS>
      <h1>Todo App</h1>
      <Button customStyle={resetButtonStyle} onClick={() => appDispatch(deleteAllTabs())}>
        Remove All
      </Button>
    </HeaderS>
  );
};

export default Header;

const HeaderS = styled.header`
  background-color: lightgreen;
  text-align: center;
  padding-top: 1px;
  padding-bottom: 1px;
  position: relative;
`;

const resetButtonStyle = `
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 4px;
`;
