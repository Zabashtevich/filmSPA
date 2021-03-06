import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 0 1rem;
`;

export const Container = styled.div`
  ${({ theme }) => theme.animations.fade()};
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const List = styled.div`
  flex-direction: column;
  display: flex;
`;

export const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin: 1rem 0;
  display: flex;
  height: 150px;

  @media (max-width: 550px) {
    height: 100px;
  }
`;

export const Poster = styled.img`
  border-radius: 0.5rem 0 0 0.5rem;
  object-position: top left;
  object-fit: cover;
  width: 200px;

  @media (max-width: 550px) {
    width: 100px;
  }
`;

export const Wrapper = styled.div`
  flex-direction: column;
  padding-bottom: 1rem;
  padding: 1rem 1rem 1rem;
  display: flex;
`;

export const Subtitle = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  text-decoration: none;
  color: black;

  &:hover {
    color: ${({ theme }) => theme.colors.aux};
    cursor: pointer;
  }

  @media (max-width: 550px) {
    font-size: ${({ theme }) => theme.font.aux.size.normal};
  }
`;

export const Date = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.5);
  margin-top: 0.2rem;
  user-select: none;

  @media (max-width: 550px) {
    font-size: ${({ theme }) => theme.font.aux.size.small};
  }
`;

export const Overview = styled.div`
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  user-select: none;
  margin-top: auto;
  overflow: hidden;

  @media (max-width: 550px) {
    font-size: ${({ theme }) => theme.font.aux.size.small};
  }
`;
