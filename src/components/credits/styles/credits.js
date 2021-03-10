import styled, { css } from "styled-components/macro";

import { GoTriangleUp } from "react-icons/go";
import { BiRadioCircle } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  flex-direction: column;
  margin-top: 2rem;
  display: flex;
`;

export const Header = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
`;

export const Select = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  align-self: flex-end;
  position: relative;
  user-select: none;
  cursor: pointer;
  display: flex;
`;

export const Value = styled.span`
  white-space: nowrap;
  margin-right: 0.3rem;
`;

export const Arrow = styled(GoTriangleUp)`
  transition: 300ms;
  align-self: flex-end;
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(180deg);
    `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.animations.slide({ x: 0, y: 200 }, { x: 0, y: 200 })};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  flex-direction: column;
  top: calc(100% + 8px);
  position: absolute;
  display: flex;
  right: 0;
`;

export const Option = styled.span`
  padding: 0.2rem 0.4rem;
  width: 75px;
`;

export const List = styled.div`
  box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: column;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
  display: flex;
`;

//ITEM

export const Item = styled.div`
  align-items: center;
  padding: 0.2rem 0;
  display: flex;
  height: 40px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: 300ms;
  }
`;

export const Year = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  text-align: center;
  width: 50px;
`;

export const Icon = styled(BiRadioCircle)`
  margin-left: 2rem;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  margin-left: 3rem;
  width: 250px;
`;

export const Name = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
`;

export const Role = styled.div``;

export const Meta = styled.div`
  align-items: center;
  margin-left: 2rem;
  display: flex;
  width: 100px;
`;

export const Average = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  ${({ value }) =>
    value > 5 &&
    css`
      color: green;
    `};
  ${({ value }) =>
    Math.floor(value) === 5 &&
    css`
      color: #333;
    `};
  ${({ value }) =>
    value < 5 &&
    css`
      color: red;
    `};
`;

export const Count = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  align-self: flex-end;
  margin-left: 0.2rem;
  color: gray;
`;

//RATING

export const Highscore = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 0.2rem;
  text-align: center;
  margin-left: 3rem;
  padding: 0.4rem;
  color: white;
  width: 25px;
`;

export const Rating = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  margin-left: auto;
  margin-right: 1rem;
  position: relative;
  align-items: center;
  padding: 0.2rem;
  display: flex;
  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    transition: 300ms;
    & > :first-child {
      color: white;
    }
  }
`;

export const Star = styled(BsFillStarFill)`
  padding: 0.1rem;
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.aux};
    `};
`;

export const Popup = styled.div`
  ${({ theme }) => theme.animations.slide({ x: 100, y: 0 }, { x: 100, y: 0 })};
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 0.3rem;
  background-color: white;
  left: calc(100% + 8px);
  padding: 0.2rem 0.4rem;
  align-items: center;
  position: absolute;
  display: flex;
  top: 25%;
`;

export const Close = styled(GrClose)`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
`;
