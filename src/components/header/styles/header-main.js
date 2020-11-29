import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  height: 64px;
`;
export const Inner = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
`;
export const Link = styled(ReactRouterLink)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  margin: 20px;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightStandart.bold};
  padding: 5px;
  display: block;
  transition: box-shadow 1s;
  ${({ positionchanged }) =>
    positionchanged &&
    css`
      color: #fff;
      transition: color 500ms linear;
    `};

  &:hover {
    box-shadow: inset 0 -2px currentColor;
  }
`;
export const Input = styled.input`
  width: ${({ widthActive }) => (widthActive ? "320px" : "160px")};
  height: 30px;
  outline: none;
  transition: width 0.5s;
  font-size: ${({ theme }) => theme.fontSize.normal};
  padding: 0.5rem;
  border: none;
  border-radius: 50px;
  background: none;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
  ${({ positionStart }) =>
    positionStart &&
    css`
      color: #fff;
    `};
  ${({ positionchanged }) =>
    positionchanged &&
    css`
      color: #000;
      &::placeholder {
        color: #000;
      }
    `}
`;
export const Profile = styled.div`
  width: 30px;
`;
export const Logo = styled(ReactRouterLink)`
  font-size: ${({ theme }) => theme.fontSize.logo};
  letter-spacing: 0.1rem;
  font-weight: ${({ theme }) => theme.fontWeightStandart.bold};
  width: 200px;
  margin-right: 2rem;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.colors.secondary};
  &::after {
    content: "";
    position: absolute;
    width: 4rem;
    height: 1.2rem;
    background: ${({ theme }) => theme.colors.secondary};
    top: 50%;
    margin-left: 0.6rem;
    transform: translateY(-50%);
    border-radius: 1rem;
    ${({ positionchanged }) => positionchanged && "background: #fff"};
  }
  ${({ positionchanged }) =>
    positionchanged &&
    css`
      color: #fff;
      transition: color 500ms linear;
    `};
`;

export const Background = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 4px 2px 6px 6px rgba(0, 0, 0, 0.3);
  transform: translateY(-100%);
  transition: background 500ms linear, transform 200ms linear;
  background: #fff;
  ${({ positionchanged }) =>
    positionchanged &&
    css`
      background: ${({ theme }) => theme.colors.secondary};
    `}
  ${({ visible }) =>
    visible &&
    css`
      transform: translateY(0);
      transition: transform 100ms linear;
    `};
`;

export const Icon = styled(FaSearch)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  text-align: center;
  margin: 0 1rem;
  cursor: pointer;
  color: #fff;
  ${({ positionchanged }) =>
    positionchanged &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.headerInputIcon};
  ${({ positionchanged }) =>
    positionchanged &&
    css`
      background: #fff;
    `}
`;
