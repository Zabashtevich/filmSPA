import styled from "styled-components/macro";

import { BsChevronExpand, BsFillHeartFill } from "react-icons/bs";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  color: black;
  width: 300px;
`;

export const Wrapper = styled.div`
  justify-content: space-between;
  background-color: #f3f3f3;
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  align-items: center;
  position: relative;
  display: flex;
  z-index: 2000;
  width: 100%;
  &:active {
    transform: scale(0.98);
  }
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  position: relative;
`;

export const Arrow = styled(BsChevronExpand)`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin-left: 0.3rem;
`;

export const List = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  ${({ theme }) => theme.animations.slide({ x: 0, y: -50 }, { x: 0, y: -50 })};
  justify-content: center;
  background-color: white;
  flex-direction: column;
  border-radius: 0.2rem;
  top: calc(100% + 8px);
  align-items: center;
  position: absolute;
  display: flex;
  z-index: 500;
  width: 100%;
  left: 0;
`;

export const Favorite = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem 0.2rem 0 0;
  box-sizing: border-box;
  padding: 0.4rem 0.6rem;
  margin-bottom: -1px;
  position: relative;
  user-select: none;
  width: 100%;
`;

export const Name = styled.span``;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 0.4rem 0.6rem;
  margin-bottom: -1px;
  user-select: none;
  width: 100%;
`;

export const Item = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 0.4rem 0.6rem;
  align-items: center;
  margin-bottom: -1px;
  position: relative;
  user-select: none;
  width: 100%;
`;

export const Link = styled(ReactRouterLink)`
  padding: 0.4rem 0.6rem;
  text-decoration: none;
  text-align: center;
  display: block;
  color: black;
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.colors.aux};
    background-color: rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    user-select: none;
    transition: 300ms;
  }
`;

export const Heart = styled(BsFillHeartFill)`
  color: ${({ theme }) => theme.colors.error};
  transform: translateY(-50%);
  position: absolute;
  right: 5%;
  top: 50%;
`;
