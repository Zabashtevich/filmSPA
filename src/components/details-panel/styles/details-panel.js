import styled, { css } from "styled-components/macro";

import { IoIosStar } from "react-icons/io";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.font.aux.family};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  padding: 1rem 2rem;
`;

export const Overview = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  width: 600px;
  margin: 2rem auto;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 2rem 4rem;
  border-radius: 0.4rem;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0 0;
  user-select: none;
  position: relative;
`;

export const Star = styled(IoIosStar)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  padding: 0.2rem;
  cursor: pointer;
  color: gray;
  ${({ rated }) =>
    rated &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `};
  ${({ hoveractive }) =>
    hoveractive &&
    css`
      color: rgba(50, 25, 255, 0.6);
    `};
  & > * {
    pointer-events: none;
  }
`;

export const Votes = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  color: rgba(0, 0, 0, 0.2);
`;

export const Average = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  margin-left: 1rem;
  ${({ average }) =>
    +average > 5 &&
    css`
      color: green;
    `}
  ${({ average }) =>
    +average < 5 &&
    css`
      color: ${({ theme }) => theme.colors.error};
    `}
`;

export const UserRating = styled.div`
  margin: 1rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  background: rgba(0, 0, 0, 0.05);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  ${({ theme }) => theme.animations.opacity};
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0.2rem 0;
`;

export const UserTitle = styled.span``;

export const UserValue = styled.span`
  text-align: center;
  color: white;
  border-radius: 50%;
  padding: 0.1rem;
  margin-left: 0.5rem;
  background: ${({ theme }) => theme.colors.secondary};
  width: 30px;
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  margin-left: 0.5rem;
  border: none;
  background: none;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  outline: none;
  &:hover {
    color: black;
    transition: 500ms;
  }
`;

export const Time = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.small};
`;

export const Reviews = styled.div`
  max-width: 800px;
  width: 100%;
  min-height: 300px;
  background-color: ${({ theme }) => theme.colors.reviewsBackground};
  margin: 4rem 0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const CreateReview = styled(ReactRouterLink)`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: white;
  margin: 1rem auto;
  &:hover {
    background-color: white;
    color: black;
    transition: 500ms;
  }
`;
