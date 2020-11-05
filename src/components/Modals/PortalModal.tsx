import styled from "@emotion/styled";
import React, { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const mount = document.getElementById("portal");

type Props = {
  children: ReactNode;
  active: boolean;
};

const PortalModal = ({ children, active }: Props) => {
  const el = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    el.current = document.createElement("div");
    mount?.appendChild(el.current);
    const el2 = el.current;

    return () => {
      mount?.removeChild(el2);
    };
  }, []);
  if (el.current) {
    return createPortal(
      <>
        {active && (
          <>
            <PortalOverlay />
            <PortalContainerS>{children}</PortalContainerS>
          </>
        )}
      </>,
      el.current
    );
  }
  return null;
};

export default PortalModal;

const PortalContainerS = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
`;

const PortalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;
