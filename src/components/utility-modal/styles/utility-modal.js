import styled from "styled-components/macro";

import { ImWarning } from "react-icons/im";
import { BiErrorAlt } from "react-icons/bi";

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 60%;
  height: 70%;
  background: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
  border-radius: 1rem;
  border: 0.5rem solid ${({ theme }) => theme.colors.error};
`;

export const IconInner = styled.div``;

export const ContentInner = styled.div``;

export const ErrorIcon = styled(BiErrorAlt)``;

export const WarningIcon = styled(ImWarning)``;

export const Title = styled.span``;

export const Message = styled.span``;

export const Wrapper = styled.div``;

export const AcceptButton = styled.button``;

export const DeclineButton = styled.button``;
