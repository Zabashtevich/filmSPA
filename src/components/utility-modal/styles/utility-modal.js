import styled, { css } from "styled-components/macro";

import { ImWarning } from "react-icons/im";
import { BiErrorAlt } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";

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
  ${({ theme }) => theme.animations.opacity};
`;

export const Container = styled.div`
  width: 900px;
  height: 600px;
  background: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
  border-radius: 0.4rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  ${({ theme }) => theme.animations.LtR}
`;

export const Header = styled.div`
  height: 45%;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 0.4rem 0.4rem 0 0;
  ${({ type }) =>
    type === "error" &&
    css`
      background: ${({ theme }) => theme.colors.error};
    `}
  ${({ type }) =>
    type === "warning" &&
    css`
      background: ${({ theme }) => theme.colors.warning};
    `}
`;

export const ErrorIcon = styled(BiErrorAlt)`
  position: absolute;
  font-size: 15rem;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 1);
`;

export const WarningIcon = styled(ImWarning)`
  position: absolute;
  font-size: 14rem;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 1);
`;

export const Close = styled(RiCloseFill)`
  position: absolute;
  right: 0;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  & > * {
    pointer-events: none;
  }
`;

export const Title = styled.span`
  position: absolute;
  top: 10%;
  left: 5%;
  font-size: 3rem;
  border-bottom: 1px solid white;
  color: white;
  user-select: none;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 55%;
  width: 100%;
`;

export const Message = styled.span`
  margin-left: 3rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  user-select: none;
`;

export const Wrapper = styled.div`
  align-self: flex-end;
  margin-right: 3rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  user-select: none;
`;

export const AcceptButton = styled.button`
  background: ${({ theme }) => theme.colors.error};
  color: white;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  ${({ type }) =>
    type === "error" &&
    css`
      background: ${({ theme }) => theme.colors.error};
      border: 1px solid ${({ theme }) => theme.colors.error};
    `}
  ${({ type }) =>
    type === "warning" &&
    css`
      background: ${({ theme }) => theme.colors.warning};
      border: 1px solid ${({ theme }) => theme.colors.warning};
    `}
  &:hover {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: black;
    transition: 500ms;
  }
`;

export const DeclineButton = styled.button`
  margin-right: 1rem;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: black;
    transition: 500ms;
  }
`;
