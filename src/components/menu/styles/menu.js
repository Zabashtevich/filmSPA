import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

import { BsCardList, BsChevronDoubleRight } from "react-icons/bs";

export const Outer = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  padding-left: 2rem;
  transition: 300ms;
  user-select: none;
  position: fixed;
  width: 350px;
  bottom: 0;
  left: 0;
  top: 0;

  ${({ visible }) =>
    !visible &&
    css`
      transform: translateX(calc(-350px + -2rem));
    `};
`;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  margin-bottom: 5rem;
  position: relative;
  margin-top: 5rem;
  color: white;

  &::after {
    transform: translateX(-50%);
    width: calc(100% + 50px);
    background-color: white;
    position: absolute;
    height: 1px;
    content: "";
    left: 50%;
    top: 110%;
  }
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  color: white;
`;

export const List = styled.div`
  ${({ theme }) => theme.animations.fade()};
  flex-direction: column;
  margin-top: 2rem;
  display: flex;
`;

export const Item = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  align-items: center;
  margin: 0.4rem 0;
  padding: 0.5rem;
  display: flex;
  cursor: grab;
  width: 100%;
`;

export const Thumbnail = styled(BsCardList)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 1rem;
  user-select: none;
  overflow: hidden;
  width: 140px;
`;

export const Arrow = styled(BsChevronDoubleRight)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 0 0.5rem 0.5rem 0;
  transform: translateY(-50%);
  padding: 0.6rem 0.4rem;
  position: absolute;
  color: white;
  left: 100%;
  top: 50%;
`;

export const Footer = styled.div`
  margin-bottom: 5rem;
  margin-top: auto;
`;

export const Link = styled(ReactRouterLink)`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  text-decoration: none;
  display: block;
  margin: 1rem 0;
  color: white;

  &:hover {
    text-decoration: underline;
    transition: 300ms;
  }
`;
