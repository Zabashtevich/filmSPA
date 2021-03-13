import styled, { css } from "styled-components/macro";

import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  justify-content: space-between;
  align-items: center;
  user-select: none;
  position: fixed;
  display: flex;
  z-index: 2000;
  height: 75px;
  width: 100%;
  color: white;
`;

export const Logo = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  margin: 0 4rem;
`;

export const Wrapper = styled.div`
  align-items: center;
  margin-right: 2rem;
  display: flex;
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
  min-width: 200px;
`;

export const Avatar = styled.div``;

export const Popup = styled.div``;

export const Info = styled.div``;

export const Name = styled.div``;

export const Mail = styled.div``;

export const Edit = styled.div``;

export const Signout = styled.div``;
