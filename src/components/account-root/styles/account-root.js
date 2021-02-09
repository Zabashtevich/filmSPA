import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Nickname = styled.div`
  color: #000;
  font-size: ${({ theme }) => theme.fontSize.normal};
  margin-top: 2rem;
`;

export const PosterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid gray;
  padding: 1rem 2rem;
  width: 20%;
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 200px;
  border-radius: 1rem;
`;

export const Link = styled(ReactRouterLink)`
  margin-top: 1rem;
  width: 80%;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.3rem 0;
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  border: 1px solid black;
  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
    transition: 500ms;
  }
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  text-align: center;
  margin-bottom: 4rem;
`;

export const Wrapper = styled.div`
  align-self: flex-start;
  margin: 2rem 0;
`;

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  margin-left: 3rem;
`;

export const TabInner = styled.div`
  display: flex;
`;
