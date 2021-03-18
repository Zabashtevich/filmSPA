import styled, { css } from "styled-components/macro";

import { BsCircle } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

export const Container = styled.div`
  flex-direction: column;
  margin-top: 1rem;
  display: flex;
`;

export const Header = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const List = styled.div`
  flex-direction: column;
  min-height: 500px;
  margin-top: 1rem;
  display: flex;
`;

export const Item = styled.div`
  box-shadow: 0px 0px 5px 2px rgba(34, 60, 80, 0.2);
  align-items: center;
  display: flex;
  height: 50px;
`;

export const Year = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  text-align: center;
  margin-left: 0.5rem;
  width: 40px;
`;

export const Icon = styled(BsCircle)`
  font-size: 0.7rem;
  margin-left: 2rem;
`;

export const Info = styled.div`
  justify-content: center;
  flex-direction: column;
  margin-left: 3rem;
  display: flex;
  width: 170px;
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  user-select: none;
`;

export const Role = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  color: rgba(0, 0, 0, 0.5);
`;

export const Meta = styled.div`
  margin-left: 2rem;
  height: 18px;
  width: 70px;
`;

export const Average = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
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
    Math.floor(value) === 5 &&
    css`
      color: #333;
    `};
`;

export const Amount = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  color: rgba(0, 0, 0, 0.5);
  margin-left: 0.5rem;
`;

export const Uservalue = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  background-color: ${({ theme }) => theme.colors.main};
  padding: 0.4rem 0.6rem;
  border-radius: 0.5rem;
  text-align: center;
  margin-left: 5rem;
  color: white;
  width: 20px;
`;

export const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  align-items: center;
  position: relative;
  margin-right: 1rem;
  margin-left: auto;
  display: flex;
`;

export const Star = styled(AiFillStar)`
  ${({ hovered }) =>
    hovered &&
    css`
      color: ${({ theme }) => theme.colors.aux};
      transition: 300ms;
    `};
`;

export const Popup = styled.div`
  ${({ theme }) => theme.animations.slide({ x: 100, y: 0 }, { x: 100, y: 0 })};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: white;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  left: calc(100% + 8px);
  align-items: center;
  position: absolute;
  display: flex;
  z-index: 500;
`;

export const Close = styled(GrClose)`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
`;
