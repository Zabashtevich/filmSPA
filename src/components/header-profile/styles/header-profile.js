import styled from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  position: relative;
`;

export const Icon = styled.img`
  width: 45px;
  margin: 0.5rem;
  border-radius: 1.5rem;
  cursor: pointer;
`;

export const PopupContainer = styled.div`
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const PopupLink = styled(ReactRouterLink)``;

export const PopupLogout = styled.span``;

export const PopupNickname = styled.span``;
