import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

import { GoStar } from "react-icons/go";

export const Container = styled.div`
  max-width: 1300px;
  padding: 2rem 0;
  margin: 0 auto;
`;

export const Section = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem 0;
`;

export const Title = styled.div``;

export const Collection = styled.div`
  border-radius: 0.5rem;
  position: relative;
  width: 1300px;
  height: 300px;
  ${({ src }) =>
    src &&
    css`
      background-image: linear-gradient(
          to right,
          rgba(3, 38, 66, 1) 0%,
          rgba(3, 38, 66, 0.2) 100%
        ),
        url(${src});
      background-size: cover;
      background-position: 50% 50%;
    `};
`;

export const Info = styled.div`
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  display: flex;
  left: 5%;
  top: 40%;
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  color: white;
`;

export const Button = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  background-color: white;
  padding: 0.7rem 1.2rem;
  text-decoration: none;
  border-radius: 1rem;
  margin-top: 0.5rem;
  color: black;
  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    transition: 300ms;
    color: white;
  }
`;

export const Subsection = styled.div``;

export const Rating = styled.div``;

export const Star = styled.div``;

export const Value = styled(GoStar)``;

export const Wrapper = styled.div``;

export const Date = styled.div``;

export const Delete = styled.div``;

export const Meta = styled.div``;

export const Average = styled.div``;

export const Count = styled.div``;
