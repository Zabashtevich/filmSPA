import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  height: 75px;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const Wrapper = styled.div`
  margin-left: 300px;
  display: flex;
`;

export const Tab = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  position: relative;
  user-select: none;
  cursor: pointer;
  margin: 0 1rem;
  ${({ selected }) =>
    selected &&
    css`
      &::after {
        transform: translateX(-50%);
        background-color: black;
        position: absolute;
        content: "";
        width: 100%;
        height: 3px;
        top: 130%;
        left: 50%;
      }
    `};
`;

export const All = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  color: ${({ theme }) => theme.colors.aux};
  text-decoration: none;
  user-select: none;
  margin-left: auto;
  cursor: pointer;
`;

export const Scroller = styled.div`
  position: relative;
  overflow-x: scroll;
  transition: 300ms;
  min-height: 300px;
  display: flex;
  &::after {
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      #fff 80%
    );
    visibility: visible;
    position: absolute;
    height: 100%;
    content: "";
    width: 100px;
    opacity: 1;
    right: 0;
  }
  & > *:first-child {
    border-radius: 0.5rem 0 0;
  }
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.05);
  }
  ${({ blured }) =>
    blured &&
    css`
      &::after {
        visibility: hidden;
        transition: 150ms;
        opacity: 0;
      }
    `};
`;

export const Backdrop = styled.img`
  ${({ theme }) => theme.animations.fade(500, 0, 500)};
  height: 300px;
`;

export const Poster = styled.img`
  ${({ theme }) => theme.animations.fade(500, 0, 500)};
`;

export const Video = styled.div`
  ${({ theme }) => theme.animations.fade(500, 0, 500)};
  position: relative;
  min-width: 533px;
  height: 300px;
  ${({ url }) =>
    url &&
    css`
      background-image: url(${url});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `};
`;

export const Play = styled(BsFillPlayFill)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  background-color: rgba(0, 0, 0, 0.6);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  position: absolute;
  display: block;
  padding: 1rem;
  color: white;
  left: 50%;
  top: 50%;
`;
