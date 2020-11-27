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
  color: #fff;
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
  background-color: transparent;
`;

export const Icon = styled(FaSearch)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  text-align: center;
  margin: 0 1rem;
  cursor: pointer;
  color: #fff;
  ${({ activeColor }) =>
    activeColor &&
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
  ${({ activeColor }) =>
    activeColor &&
    css`
      background-color: #fff;
    `};
`;
