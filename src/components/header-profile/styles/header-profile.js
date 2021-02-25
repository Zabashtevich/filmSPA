import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.font.aux.family};
`;

export const Icon = styled.img`
  width: 45px;
  margin: 0.5rem;
  border-radius: 1.5rem;
  cursor: pointer;
  ${({ positionchanged }) =>
    positionchanged &&
    css`
      border: 1px solid white;
    `}
`;

export const PopupContainer = styled.div`
  position: absolute;
  top: 98%;
  left: -100%;
  border-radius: 0 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &.my-node-enter {
    opacity: 0;
    transform: translateY(-400px);
  }
  &.my-node-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: 200ms;
  }
  &.my-node-exit {
    opacity: 1;
    transform: translateY(0);
  }
  &.my-node-exit-active {
    opacity: 0;
    transform: translateY(-400px);
    transition: 300ms;
  }
`;

export const PopupLink = styled(ReactRouterLink)`
  text-decoration: none;
  color: #000;
  margin: 1rem 2rem 0.2rem 1rem;
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
  &:hover {
    color: gray;
    transition: 200ms;
  }
`;

export const PopupLogout = styled.span`
  margin: 1rem 2rem 1.3rem 1rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
  &:hover {
    color: gray;
    transition: 200ms;
  }
`;

export const PopupEmail = styled.span`
  margin: 0.2rem 2rem 1.3rem 1rem;
  font-size: 0.9rem;
  color: gray;
  cursor: default;
`;

export const PopupNickname = styled.span`
  margin: 1rem 2rem 0.2rem 1rem;
  cursor: default;
  font-size: 1.2rem;
`;

export const PopupMetawrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
  position: relative;
  &::after {
    content: "";
    display: ${({ popupVisible }) => (popupVisible ? "block" : "none")};
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid gray;
    top: -2%;
    left: 65%;
  }
`;
