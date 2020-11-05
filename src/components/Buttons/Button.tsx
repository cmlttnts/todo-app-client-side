import styled from "@emotion/styled";
import { baseButtonStyle } from "components/Buttons/buttonsUtils";
import React, { ReactNode } from "react";

type Props = {
  customStyle: string;
  children: ReactNode;
  onClick: () => void;
};

const Button = ({ customStyle, children, onClick }: Props) => {
  return (
    <ButtonS customStyle={customStyle} onClick={onClick}>
      {children}
    </ButtonS>
  );
};

const ButtonS = styled.button`
  ${baseButtonStyle};
  ${(props: Props) => props.customStyle};
`;

export default Button;
