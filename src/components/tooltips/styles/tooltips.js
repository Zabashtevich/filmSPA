import styled, { css } from "styled-components/macro";

import { FaRegListAlt } from "react-icons/fa";

import { MdFavorite } from "react-icons/md";

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
`;

export const ItemWrapper = styled.div`
  background-color: gray;
  border-radius: 50%;
  position: relative;
  display: flex;
  cursor: pointer;
  ${({ rightposition }) =>
    rightposition &&
    css`
      margin-left: 1rem;
    `};
`;

export const Watchlist = styled(FaRegListAlt)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  padding: 1rem;
`;

export const Favorite = styled(MdFavorite)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  padding: 1rem;
`;

export const Description = styled.span`
  position: absolute;
  background-color: gray;
  padding: 0.3rem 0.6rem;
  top: 120%;
  border-radius: 1rem;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.small};
  left: 50%;
  transform: translateX(-50%);
  &.my-node-enter {
    opacity: 0;
    transform: translateX(-200px);
  }
  &.my-node-enter-active {
    opacity: 1;
    transform: translateX(-50%);
    transition: 200ms;
  }
  &.my-node-exit {
    opacity: 1;
    transform: translateX(-50%);
  }
  &.my-node-exit-active {
    opacity: 0;
    transition: 300ms;
    transform: translateX(200px);
  }
`;
