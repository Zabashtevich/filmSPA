import styled, { css } from "styled-components/macro";

import { FaRegListAlt } from "react-icons/fa";

import { MdFavorite } from "react-icons/md";

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  width: 75%;
  justify-content: space-between;
`;

export const ItemWrapper = styled.div`
  background-color: gray;
  border-radius: 50%;
  position: relative;
  display: flex;
  cursor: pointer;
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
  padding: 0.2rem 0.4rem;
  top: 110%;
  border-radius: 1rem;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.small};
  ${({ left }) =>
    left &&
    css`
      left: -200%;
    `};
  ${({ right }) =>
    right &&
    css`
      left: 50%;
      width: 160px;
    `};
`;
