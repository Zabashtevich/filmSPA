import styled, { css } from "styled-components/macro";

import { AiFillCaretUp } from "react-icons/ai";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { BsCheck } from "react-icons/bs";
import { Link as ReactRouterLink } from "react-router-dom";

export const Face = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 0.2rem;
  font-family: ${({ theme }) => theme.font.aux.family};
  cursor: pointer;
  color: black;
  position: relative;
  margin-top: 2rem;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  display: flex;
  align-items: center;
  margin: 0 auto;
  user-select: none;
`;

export const Button = styled.div`
  height: 100%;
  padding: 0 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 1);
  margin-left: auto;
  &:active {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-left: 1px solid rgba(255, 255, 255, 1);
    color: white;
    transition: 300ms;
  }
`;

export const Arrow = styled(AiFillCaretUp)`
  transition: 300ms;
  ${({ dir }) =>
    dir === "down" &&
    css`
      transform: rotate(180deg);
    `};
  ${({ dir }) =>
    dir === "left" &&
    css`
      transform: rotate(-90deg);
    `};
`;

export const Chevron = styled(HiOutlineChevronLeft)`
  height: 100%;
  padding: 0 0.4rem;
  transition: 300ms;
  ${({ dir }) =>
    dir === "rotate" &&
    css`
      transform: rotate(180deg);
    `};
  ${({ dir }) =>
    dir === "top" &&
    css`
      transform: rotate(-90deg);
    `};
  ${({ dir }) =>
    dir === "down" &&
    css`
      transform: rotate(90deg);
    `};
`;

export const Container = styled.div`
  background-color: white;
  top: calc(100% + 8px);
  border-radius: 0.2rem;
  position: absolute;
  padding: 0 0 0.6rem 0;
  width: 200px;
  right: 0;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.animations.slide({ x: -300, y: 0 }, { x: 300, y: 0 })};
`;

export const Subtitle = styled.div`
  align-self: flex-end;
  margin: 0.5rem 2rem;
  font-weight: ${({ theme }) => theme.font.aux.weight.heavy};
  user-select: none;
`;

export const Name = styled.span`
  padding: 0 0.8rem;
  margin-left: auto;
  user-select: none;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  position: relative;
  &:hover {
    background-color: #f2f2f2;
    transition: 500ms;
  }
`;

export const Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  right: calc(100% + 8px);
  border-radius: 0.2rem;
  top: 0;
  ${({ theme }) =>
    theme.animations.slide({ x: 0, y: -300 }, { x: 0, y: -300 })};
`;

export const Element = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  padding: 0.5rem 0.2rem 0.5rem 0;
  border-radius: 0.2rem;
  text-align: left;
  position: relative;
  width: 140px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f2f2f2;
    transition: 500ms;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `};
`;

export const Added = styled(BsCheck)`
  ${({ theme }) => theme.animations.fade(300, 0, 300)};
  position: absolute;
  color: darkgreen;
  left: 10%;
  ${({ location }) =>
    location === "middle" &&
    css`
      left: 20%;
    `};
`;

export const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.font.aux.weight.heavy};
  padding: 0.5rem 0.2rem 0.5rem 0;
  border-radius: 0.2rem;
  text-align: left;
  position: relative;
  width: 140px;
  display: flex;
  align-items: center;
`;

export const Link = styled(ReactRouterLink)`
  border-bottom: 1px solid rgba(255, 255, 255, 1);
  user-select: none;
  text-decoration: none;
  color: gray;
  &:hover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transition: 300ms;
  }
`;

export const Spinner = styled.img`
  ${({ theme }) => theme.animations.fade(300, 0, 300)};
  position: absolute;
  left: 10%;
  ${({ location }) =>
    location === "middle" &&
    css`
      left: 20%;
    `};
`;
