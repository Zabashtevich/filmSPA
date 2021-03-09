import styled, { css } from "styled-components/macro";

import { GoTriangleDown } from "react-icons/go";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  margin-left: 1rem;
`;

export const Select = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  align-items: center;
  white-space: nowrap;
  text-align: center;
  margin-right: 1rem;
  position: relative;
  user-select: none;
  cursor: pointer;
  display: flex;
  color: gray;
  &:hover {
    color: black;
    transition: 300ms;
  }
`;

export const Popup = styled.div`
  ${({ theme }) => theme.animations.slide({ x: -200, y: 0 }, { x: 200, y: 0 })};
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(0, 0, 0, 0.3);
  flex-direction: column;
  background-color: white;
  position: absolute;
  top: calc(100% + 8px);
  border-radius: 0.2rem;
  display: flex;
`;

export const Value = styled.span`
  white-space: nowrap;
  padding: 0.3rem 1rem;
  color: black;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: 300ms;
  }
`;

export const Arrow = styled(GoTriangleDown)`
  margin-left: 0.2rem;
  transition: 300ms;
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(180deg);
    `};
`;

export const List = styled.div`
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 0.5rem;
`;

export const Item = styled.div``;

export const Year = styled.div``;

export const Icon = styled.div``;

export const Wrapper = styled.div``;

export const Subtitle = styled.div``;

export const Role = styled.div``;

export const Meta = styled.div``;

export const Average = styled.div``;

export const Amount = styled.div``;

export const Rating = styled.div``;

export const Button = styled.div``;

export const Star = styled.div``;
