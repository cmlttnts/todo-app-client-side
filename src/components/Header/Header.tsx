import styled from "@emotion/styled";
import React from "react";

const Header = () => {
  return (
    <HeaderS>
      <h1>Todo App</h1>
    </HeaderS>
  );
};

export default Header;

const HeaderS = styled.header`
  background-color: lightgreen;
  text-align: center;
  padding-top: 1px;
  padding-bottom: 1px;
`;
