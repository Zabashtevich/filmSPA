import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

import { BsSearch, BsX } from "react-icons/bs";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  transform: translateY(0);
  transition: 400ms;
  position: fixed;
  z-index: 3000;
  height: 75px;
  width: 100%;
  left: 0;
  top: 0;

  ${({ headerHidden }) =>
    headerHidden &&
    css`
      transform: translateY(-100%);
    `}
`;

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.main};
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const List = styled.ul`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  align-items: center;
  display: flex;
  color: white;
  padding: 0;

  &:first-of-type {
    padding-left: 10px;
  }
`;

export const Wrapper = styled.div``;

export const Item = styled.li`
  ${({ theme }) => theme.animations.fade(200, 200, 200)};
  position: relative;
  list-style: none;
`;

export const Logo = styled(ReactRouterLink)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  text-decoration: none;
  position: relative;
  margin-right: 6rem;
  color: white;

  &::after {
    transform: translateY(-50%);
    background-color: white;
    left: calc(100% + 8px);
    border-radius: 0.5rem;
    position: absolute;
    height: 15px;
    content: "";
    width: 50px;
    top: 50%;
  }

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.font.aux.size.large};
    margin-right: 3rem;

    &::after {
      height: 8px;
      width: 25px;
    }

    @media (max-width: 550px) {
      font-size: ${({ theme }) => theme.font.aux.size.big};
      margin-right: 0.5rem;

      &::after {
        display: none;
      }
    }
  }
`;

export const Inner = styled.li`
  ${({ theme }) => theme.animations.fade()};
  align-items: center;
  margin-right: 2rem;
  position: relative;
  display: flex;

  @media (max-width: 1100px) {
    margin-right: 2rem;
  }
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1rem;
  color: white;

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const Button = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin: 0 2rem;
  display: flex;
  color: white;

  @media (max-width: 500px) {
    margin: 0 0.2rem;
  }
`;

export const Search = styled(BsSearch)``;

export const Close = styled(BsX)``;

export const Profile = styled.div`
  cursor: pointer;

  @media (max-width: 500px) {
    margin-right: 1rem;
  }
`;

export const Avatar = styled.img`
  border: 1px solid rgba(255, 255, 255, 0.2);
  object-position: top left;
  border-radius: 50%;
  object-fit: cover;
  height: 50px;
  width: 50px;

  ${({ popupVisible }) =>
    popupVisible &&
    css`
      border: 1px solid rgba(255, 255, 255, 0.6);
    `};
`;

export const Popup = styled.div`
  ${({ theme }) => theme.animations.fade(500, 250, 500)};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transform: translateX(-50%);
  background-color: white;
  flex-direction: column;
  top: calc(100% + 16px);
  border-radius: 0.5rem;
  position: absolute;
  display: flex;
  color: black;
  left: -100%;
`;

export const Nickname = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  padding: 0.4rem 0.6rem 0;
  font-size: 1.3rem;
`;

export const Mail = styled.span`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0 0.6rem 0.4rem;
`;

export const Category = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.normal};
  padding: 0.3rem 0.6rem 0.3rem;
  text-decoration: none;
  display: block;
  color: black;

  &:first-of-type {
    margin-top: 0.5rem;
  }

  &:hover {
    color: red;
  }

  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

export const Logout = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.normal};
  padding: 0.3rem 0.6rem 0.3rem;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 300ms;
  }

  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;
