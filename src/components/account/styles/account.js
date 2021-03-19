import styled, { css } from "styled-components/macro";
import { FiExternalLink } from "react-icons/fi";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  justify-content: center;
  max-width: 1300px;
  padding: 4rem 0;
  margin: 0 auto;
  display: flex;
`;

export const Column = styled.div`
  ${({ theme }) => theme.animations.fade()};
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  display: flex;
  ${({ type }) =>
    type === "poster" &&
    css`
      width: 300px;
    `};
  ${({ type }) =>
    type === "content" &&
    css`
      width: 900px;
    `};
`;

export const Poster = styled.img`
  border-radius: 0.2rem;
  margin-bottom: 0.5rem;
  width: 150px;
`;

export const Nickname = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
`;

export const List = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  text-decoration: none;
  align-items: center;
  margin-top: 0.2rem;
  display: flex;
  color: #000;
  &:hover {
    color: ${({ theme }) => theme.colors.aux};
    transition: 300ms;
  }
`;

export const Settings = styled(FiExternalLink)`
  margin-left: 0.2rem;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
`;
