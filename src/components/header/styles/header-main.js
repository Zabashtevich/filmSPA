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
  color: gray;
  text-decoration: none;
  margin: 20px;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightStandart.bold};
  padding: 5px;
  display: block;
  transition: box-shadow 1s;

  &:hover {
    box-shadow: inset 0 -2px #fff;
  }
`;
export const Input = styled.input`
  width: ${(props) => (props.widthActive ? "320px" : "160px")};
  height: 30px;
  outline: none;
  transition: width 0.5s;
  font-size: ${({ theme }) => theme.fontSize.normal};
  padding: 0.5rem;
  border: none;
  border-radius: 50px;
  background: none;
  color: #000;
  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `};
  &::placeholder {
    color: #fff;
  }
`;
export const Profile = styled.div`
  width: 30px;
`;
export const Logo = styled(ReactRouterLink)`
  color: #fff;
  height: auto;
  width: 200px;
  margin-right: 1rem;
`;

export const Background = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 4px 2px 6px 6px rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: background 500ms linear, transform 50ms linear;
  ${({ standardColor }) =>
    standardColor &&
    css`
      background: #fff;
    `};
  ${({ invisible }) =>
    invisible &&
    css`
      transform: translateY(-100%);
      transition: transform 300ms linear;
    `};
`;

export const Icon = styled(FaSearch)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  text-align: center;
  margin: 0 1rem;
  cursor: pointer;
  color: #fff;
  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.headerInputIcon};
  ${({ selected }) =>
    selected &&
    css`
      background-color: #fff;
    `};
`;
