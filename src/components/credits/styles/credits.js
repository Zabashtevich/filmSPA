import styled, { css } from "styled-components/macro";

import { GoTriangleDown } from "react-icons/go";
import { BiRadioCircle } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

export const Container = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
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
  flex-direction: column;
  position: relative;
  margin-top: 0.5rem;
  display: flex;
  min-height: 500px;
  width: 800px;
`;

export const Item = styled.div`
  align-items: center;
  min-height: 50px;
  display: flex;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: 300ms;
  }
`;

export const Year = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  text-align: center;
  margin-left: 1rem;
  width: 50px;
`;

export const Icon = styled(BiRadioCircle)`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  margin-left: 2rem;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  margin-left: 3rem;
  display: flex;
  width: 250px;
`;

export const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
`;

export const Role = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
`;

export const Meta = styled.div`
  align-items: flex-end;
  margin-left: 3rem;
  display: flex;
  width: 60px;
`;

export const Average = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  ${({ value }) =>
    value > 5 &&
    css`
      color: green;
    `};
  ${({ value }) =>
    value < 5 &&
    css`
      color: red;
    `};
  ${({ value }) =>
    value === 5 &&
    css`
      color: #333;
    `};
`;

export const Amount = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  margin-left: 0.2rem;
  color: gray;
`;

export const Vote = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: ${({ theme }) => theme.colors.main};
  justify-content: center;
  border-radius: 0.2rem;
  align-items: center;
  margin-left: auto;
  display: flex;
  color: white;
  width: 35px;
  height: 35px;
`;

export const Widget = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
  border-radius: 0.2rem;
  align-items: center;
  margin-right: 1rem;
  margin-left: auto;
  position: relative;
  cursor: pointer;
  padding: 0.3rem;
  display: flex;
  outline: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: 300ms;
  }
`;

export const Star = styled(AiFillStar)`
  ${({ active }) =>
    active &&
    css`
      & > * {
        color: ${({ theme }) => theme.colors.aux};
      }
    `};
`;

export const Rating = styled.div`
  ${({ theme }) => theme.animations.slide({ x: 100, y: 0 }, { x: 100, y: 0 })}
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: white;
  padding: 0.1rem 0.4rem;
  left: calc(100% + 8px);
  border-radius: 0.2rem;
  align-items: center;
  position: absolute;
  display: flex;
  height: 100%;
`;

export const Close = styled(GrClose)``;
