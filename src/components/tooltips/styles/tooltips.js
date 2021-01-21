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
