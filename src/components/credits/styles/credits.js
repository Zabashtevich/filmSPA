import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";
import { BsFillStarFill, BsX, BsTriangleFill } from "react-icons/bs";

export const Container = styled.div`
  flex-direction: column;
  margin-top: 2rem;
  display: flex;
  width: 900px;
`;

export const Number = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.2);
  margin-right: 1rem;
  text-align: center;
  user-select: none;
  width: 50px;
`;

export const Item = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  align-items: center;
  padding: 0.5rem 0;
  margin: 0.2rem 0;
  display: flex;
  height: 50px;
  width: 100%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const Year = styled.span`
  margin-right: 3rem;
  user-select: none;
`;

export const Title = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.5);
  text-overflow: ellipsis;
  text-decoration: none;
  white-space: nowrap;
  margin-right: 4rem;
  width: 300px;
  &:hover {
    text-decoration: underline;
    transition: 300ms;
    color: black;
  }
`;

export const Meta = styled.div`
  align-items: center;
  user-select: none;
  display: flex;
  width: 90px;
`;

export const Average = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  text-align: center;
  width: 35px;
  ${({ value }) =>
    value > 5 &&
    css`
      color: green;
    `};
  ${({ value }) =>
    value < 5 &&
    css`
      color: ${({ theme }) => theme.colors.error};
    `};
  ${({ value }) =>
    Math.floor(value) === 5 &&
    css`
      color: #3f3f3f;
    `};
`;

export const Amount = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.5);
  margin-left: 1rem;
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  padding: 0.2rem 0.7rem;
  border-radius: 0.5rem;
  user-select: none;
  margin-left: 3rem;
  color: white;
`;

export const Wrapper = styled.div`
  margin-right: 1rem;
  margin-left: auto;
  display: flex;
`;

export const Rating = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
  background-color: white;
  border-radius: 0.2rem;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0.3rem;
  display: flex;
`;

export const Star = styled(BsFillStarFill)`
  padding: 0.1rem;
  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.colors.aux};
      transition: 300ms;
    `};
`;

export const Popup = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  position: absolute;
  z-index: 500;

  ${({ type }) =>
    type === "rating" &&
    css`
      font-size: ${({ theme }) => theme.font.aux.size.big};
      ${({ theme }) =>
        theme.animations.slide({ x: -100, y: 0 }, { x: -100, y: 0 })};
      padding: 0.5rem 0.3rem;
      right: calc(100% + 8px);
      border-radius: 0.5rem;
      align-items: center;
      display: flex;
    `};
  ${({ type }) =>
    type === "widget" &&
    css`
      ${({ theme }) =>
        theme.animations.slide({ x: 100, y: 0 }, { x: 100, y: 0 })};
      flex-direction: column;
      left: calc(100% + 8px);
      border-radius: 0.5rem;
      align-items: center;
      user-select: none;
      display: flex;
      width: 100px;
    `};
`;

export const Close = styled(BsX)``;

export const Widget = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
  background-color: white;
  border-radius: 0.2rem;
  align-items: center;
  margin-left: 0.4rem;
  position: relative;
  cursor: pointer;
  padding: 0.3rem;
  display: flex;
  width: 15px;
`;

export const Arrow = styled(BsTriangleFill)`
  transform: rotate(180deg);
  font-size: 0.7rem;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.font.aux.weight.light};
  color: rgba(0, 0, 0, 0.4);
  padding: 0.2rem 0.5rem;
  align-self: flex-start;
  box-sizing: border-box;
  white-space: nowrap;
  width: 100%;
`;

export const Favorite = styled.span`
  box-sizing: border-box;
  align-self: flex-end;
  padding: 0.1rem 0.5rem;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    transition: 300ms;
    color: white;
  }
`;

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.font.aux.weight.light};
  color: rgba(0, 0, 0, 0.4);
  margin: 0.2rem 0 0.2rem;
  padding: 0 0.5rem;
  align-self: flex-start;
  box-sizing: border-box;
  white-space: nowrap;
  width: 100%;
`;

export const Userlist = styled.span`
  box-sizing: border-box;
  margin-bottom: 0.3rem;
  padding: 0.1rem 0.5rem;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    transition: 300ms;
    color: white;
  }
`;
