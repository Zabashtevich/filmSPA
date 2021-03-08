import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

import { GrFormAdd, GrPrevious } from "react-icons/gr";
import { AiFillHeart } from "react-icons/ai";

export const Thumbnail = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  background-color: white;
  color: black;
  width: 120px;
  display: flex;
  position: relative;
  margin-top: 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  user-select: none;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  background-color: white;
  padding: 0.2rem 0.4rem;
  white-space: nowrap;
  margin-left: 1rem;
  border-radius: 0.2rem;
`;

export const Placeholder = styled(GrFormAdd)`
  position: absolute;
  font-size: ${({ theme }) => theme.font.aux.size.big};
  & > * {
    stroke: gray;
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  background-color: white;
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Subtitle = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  align-self: flex-start;
  padding: 0.1rem 0.2rem;
  user-select: none;
  color: gray;
`;

export const Arrow = styled(GrPrevious)`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  transition: 300ms;
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(180deg);
    `};
`;

export const Userlist = styled.div`
  padding: 0.3rem 0.4rem;
  align-self: flex-end;
  position: relative;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 300ms;
  }
`;

export const Favorite = styled.div`
  padding: 0.3rem 0.4rem;
  margin-bottom: 0.4rem;
  text-align: end;
  width: 150px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 300ms;
  }
  &:disabled {
    pointer-events: none;
  }
`;

export const List = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  background-color: white;
  right: calc(100% + 8px);
  border-radius: 0.2rem;
  position: absolute;
  width: 200px;
  min-height: 100px;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Item = styled.div`
  text-align: center;
  padding: 0.2rem 0.4rem;
  margin-top: 0.2rem;
  text-align: end;
  width: auto;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 300ms;
  }
  &:disabled {
    pointer-events: none;
  }
`;

export const Link = styled(ReactRouterLink)`
  padding: 0.2rem 0.4rem;
  text-decoration: none;
  align-self: flex-end;
  margin-top: auto;
  color: gray;
  &:hover {
    color: black;
    transition: 300ms;
  }
`;

export const Heart = styled(AiFillHeart)`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  position: absolute;
  color: red;
  left: 5%;
`;
