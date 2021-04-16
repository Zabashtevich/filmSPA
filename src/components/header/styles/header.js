import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

import { BsSearch, BsX } from "react-icons/bs";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  justify-content: space-between;
  align-items: center;
  position: fixed;
  display: flex;
  z-index: 3000;
  height: 75px;
  width: 100%;
  left: 0;
  top: 0;
`;

export const Nav = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  align-items: center;
  margin-left: 5rem;
  display: flex;
  color: white;
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
`;

export const Wrapper = styled.div`
  align-items: center;
  margin-right: 8rem;
  display: flex;
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1rem;
  color: white;
`;

export const Button = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  ${({ theme }) => theme.animations.fade(200, 200, 200)};
  margin: 0 2rem;
  display: flex;
  color: white;
`;

export const Search = styled(BsSearch)``;

export const Close = styled(BsX)``;

export const Profile = styled.div``;

export const Avatar = styled.img`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  height: 50px;
`;

export const Popup = styled.div`
  display: none;
`;

export const Nickname = styled.div``;

export const Mail = styled.div``;

export const Item = styled.div``;
