import styled from "styled-components/macro";
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
  color: #000;
  text-decoration: none;
  margin: 20px;
  font-size: ${({ theme }) => theme.fontSize.small};
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
  border-radius: 50px;
  outline: none;
  transition: width 0.5s;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.inputColor};
  padding: 7px;
  border: none;
  flex: 1;
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
  color: ${({ theme }) => theme.colors.headerIcon};
  text-align: center;
  margin-right: 7px;

  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #fff;
  border-radius: 50px;
`;
