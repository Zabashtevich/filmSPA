import styled from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

export const Container = styled.div`
  padding: 5rem 0;
  margin: 0 auto;
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
`;

export const Wrapper = styled.div`
  align-items: center;
  max-width: 1300px;
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  color: white;
`;

export const Folder = styled.img`
  border-radius: 0.3rem;
  height: 100px;
`;

export const Information = styled.div`
  flex-direction: column;
  margin-left: 1rem;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
`;

export const Back = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  text-decoration: none;
  align-items: center;
  user-select: none;
  display: flex;
  color: white;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
    transition: 300ms;
  }
`;

export const Icon = styled(BsArrowLeftShort)`
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const Column = styled.div``;

export const Menu = styled.div``;

export const Subtitle = styled.div``;

export const Amount = styled.div``;

export const Value = styled.div``;

export const Backdrop = styled.div``;

export const Poster = styled.div``;
