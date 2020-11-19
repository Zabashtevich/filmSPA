import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;
export const Inner = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
`;
export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;
  margin: 20px;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  padding: 5px;
  display: block;
  transition: box-shadow 1s;

  &:hover {
    box-shadow: inset 0 -2px #fff;
  }
`;
export const Input = styled.input`
  weight: 100px;
`;
export const Profile = styled.div`
  weight: 30px;
`;
export const Logo = styled(ReactRouterLink)`
  color: #fff;
  height: auto;
  width: 200px;
  margin-right: 1rem;
`;

export const Background = styled.div`
  background-color: #032541;
`;

export const Icon = styled(FaSearch)`
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize.huge};

  &:hover {
    cursor: pointer;
  }
`;
