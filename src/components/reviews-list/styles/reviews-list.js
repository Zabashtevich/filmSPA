import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  padding: 1rem 4rem;
  max-width: 750px;
  margin: 2rem auto;
  min-height: 30rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nickname = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
`;

export const Content = styled.div`
  line-height: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  display: inline-block;
`;

export const ItemContainer = styled.div`
  border-radius: 1rem;
  border-top: 1rem;
  margin-top: 2rem;
  min-height: 200px;
  background-color: #fff;
  ${({ backgroundcolor }) =>
    backgroundcolor <= 4 &&
    css`
      background: ${({ theme }) => theme.colors.negativeReview};
    `}
  ${({ backgroundcolor }) =>
    backgroundcolor >= 6 &&
    css`
      background: ${({ theme }) => theme.colors.positiveReview};
    `};
  ${({ backgroundcolor }) =>
    backgroundcolor === null &&
    css`
      background: ${({ theme }) => theme.colors.reviewsBackground};
    `};
  ${({ backgroundcolor }) =>
    backgroundcolor === 5 &&
    css`
      background: ${({ theme }) => theme.colors.reviewsBackground};
    `};
`;

export const ContentWrapper = styled.div`
  padding: 2rem;
`;

export const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
`;

export const Avatar = styled.img`
  border-radius: 2rem;
  margin-right: 1rem;
  width: 75px;
`;

export const Author = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  position: relative;
`;

export const Score = styled.span`
  position: absolute;
  right: 10%;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  color: #fff;
  background: green;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
`;

export const NoReviews = styled.div`
  padding: 4rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
`;

export const TextLink = styled.a`
  color: gray;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewsAmount = styled.span`
  display: block;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.weight};
  margin-right: 2rem;
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AmountTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
  margin-right: 3rem;
`;

export const LinkButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  align-self: center;
  border-radius: 1rem;
  border: 1px solid gray;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
  padding: 0.4rem 1rem;
  margin: 2rem 0;
  cursor: pointer;
  outline: none;
  &:hover {
    border: 1px solid gray;
    background-color: #fff;
    color: ${({ theme }) => theme.colors.secondary};
    transition: 250ms;
  }
`;
