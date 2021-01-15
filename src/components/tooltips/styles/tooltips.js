import styled from "styled-components/macro";

import { FaRegListAlt } from "react-icons/fa";

import { MdFavorite } from "react-icons/md";

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const ItemWrapper = styled.div`
  background-color: gray;
  border-radius: 50%;
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

export const Description = styled.div``;
