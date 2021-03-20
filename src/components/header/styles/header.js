import styled, { css } from "styled-components/macro";

import { NavLink, Link as ReactRouterLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export const Container = styled.div`
  ${({ theme }) => theme.animations.slide({ x: 0, y: -100 }, { x: 0, y: -100 })}
  background-color: ${({ theme }) => theme.colors.main};
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 8px rgb(0 0 0 / 50%);
  justify-content: space-between;
  align-items: center;
  user-select: none;
  position: fixed;
  display: flex;
  z-index: 500;
  height: 75px;
  width: 100%;
  color: white;
`;

export const Logo = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  position: relative;
  margin: 0 5rem;
  &::after {
    transform: translateY(-50%);
    background-color: white;
    border-radius: 0.6rem;
    position: absolute;
    height: 20px;
    content: "";
    width: 60px;
    left: 110%;
    top: 50%;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  margin-right: 2rem;
  display: flex;
  height: 100%;
`;

export const Link = styled(NavLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  text-decoration: none;
  margin: 0 1rem;
  color: white;
`;

export const Inner = styled.div`
  position: relative;
`;

export const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  transition: 300ms;
  outline: none;
  height: 30px;
  width: 150px;
  ${({ active }) =>
    active &&
    css`
      width: 250px;
    `};
`;

export const Icon = styled(BsSearch)`
  transform: translateY(-50%);
  pointer-events: none;
  position: absolute;
  color: black;
  right: 5%;
  top: 50%;
`;

export const Profile = styled.div`
  align-items: center;
  position: relative;
  min-width: 300px;
  display: flex;
  height: 100%;
`;

export const Avatar = styled.img`
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  margin-left: 2rem;
  cursor: pointer;
  height: 50px;
  width: 50px;
`;

export const Popup = styled.div`
  ${({ theme }) => theme.animations.slide({ x: -200, y: 0 }, { x: 200, y: 0 })}
  box-shadow: 0 2px 8px rgb(0 0 0 / 50%);
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  flex-direction: column;
  border-radius: 0.2rem;
  top: calc(100% + 8px);
  position: absolute;
  font-size: 1.1rem;
  display: flex;
  color: black;
`;

export const Info = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem 1rem;
  display: flex;
`;

export const Name = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
`;

export const Mail = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
`;

export const Account = styled(ReactRouterLink)`
  margin: 0.6rem 1rem 0;
  text-decoration: none;
  cursor: pointer;
  color: black;
`;

export const Signout = styled.span`
  margin: 0.5rem 1rem;
  cursor: pointer;
`;
