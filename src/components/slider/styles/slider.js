import styled, { css } from "styled-components/macro";

import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

export const Container = styled.div`
  justify-content: center;
  flex-direction: row;
  position: relative;
  max-width: 1500px;
  padding-top: 5rem;
  margin: 0 auto;
  display: flex;
`;

export const Slide = styled.div`
  ${({ active }) => active && `transform: translateX(${active * -1500}px)`};
  justify-content: center;
  visibility: hidden;
  transition: 300ms;
  display: flex;
  opacity: 0;
  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      opacity: 1;
    `};
`;

export const Item = styled.div``;

export const Poster = styled.img`
  width: 300px;
`;

export const Gradient = styled.div``;

export const Info = styled.div``;

export const Title = styled.div``;

export const Genres = styled.div``;

export const Overview = styled.div``;

export const Wrapper = styled.div``;

export const Dot = styled.div``;

export const Left = styled(FiChevronsLeft)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  position: absolute;
  color: black;
  top: 50%;
  left: -4%;
`;

export const Right = styled(FiChevronsRight)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  position: absolute;
  color: black;
  top: 50%;
  right: -4%;
`;
