import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const Container = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const List = styled.div`
  ${({ theme }) => theme.animations.fade()};
  margin-top: 3rem;
  flex-wrap: wrap;
  display: flex;
`;

export const Card = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 0.3rem;
  margin: 0.5rem 0.2rem;
  align-items: center;
  display: flex;
  width: 250px;
  height: 60px;

  @media (max-width: 850px) {
    width: 200px;
    height: 60px;
  }

  @media (max-width: 500px) {
    margin: 0 auto;
    margin-top: 0.4rem;
    width: 250px;
    height: 60px;
  }
`;

export const Poster = styled.img`
  border-radius: 0.3rem 0 0 0.3rem;
  object-fit: cover;
  height: 60px;
  width: 60px;
`;

export const Info = styled.div`
  text-overflow: ellipsis;
  flex-direction: column;
  margin-left: 0.2rem;
  white-space: nowrap;
  overflow: hidden;
  display: flex;

  @media (max-width: 650px) {
    font-size: 0.8rem;
  }
`;

export const Name = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  text-overflow: ellipsis;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  color: black;

  &:hover {
    color: ${({ theme }) => theme.colors.aux};
    transition: 300ms;
  }
`;

export const Role = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
