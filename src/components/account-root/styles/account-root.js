import styled from "styled-components/macro";
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

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.span`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Subtitle = styled.span`
  align-self: flex-start;
  margin: 4rem 0 0 3rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

export const Lists = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 90%;
  margin-top: 1rem;
  border-radius: 0.2rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  height: 175px;
`;
