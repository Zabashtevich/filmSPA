import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
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
  left: 50%;
  border-radius: 0 0 1rem 1rem;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PopupLink = styled(ReactRouterLink)`
  text-decoration: none;
  color: #000;
  margin: 1rem 2rem 0.2rem 1rem;
`;

export const PopupLogout = styled.span`
  margin: 1rem 2rem 1.3rem 1rem;
`;

export const PopupEmail = styled.span`
  margin: 1rem 2rem 1.3rem 1rem;
`;

export const PopupNickname = styled.span`
  margin: 1rem 2rem 0.2rem 1rem;
  cursor: default;
  font-size: 1.2rem;
`;
