import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  width: 600px;
  margin: 1rem auto;
  margin-top: 3rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  ${({ theme }) => theme.animations.opacity};
  ${({ rating }) =>
    rating > 5 &&
    css`
      background-color: ${({ theme }) => theme.colors.positiveReview};
    `}
  ${({ rating }) =>
    rating < 5 &&
    css`
      background-color: ${({ theme }) => theme.colors.negativeReview};
    `}
    ${({ rating }) =>
    rating === 5 &&
    css`
      background-color: white;
    `}
    ${({ rating }) =>
    rating === null &&
    css`
      background-color: white;
    `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Nickname = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  margin-left: 1rem;
`;

export const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

export const Rating = styled.span`
  width: 40px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border-radius: 0.5rem;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
`;

export const Time = styled.span``;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div``;

export const Paragraph = styled.p``;

export const Link = styled.a`
  text-decoration: none;
  color: gray;
`;

export const Show = styled.button`
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  border-radius: 0.5rem;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  ${({ theme }) => theme.animations.opacity};
  &:hover {
    color: black;
    background-color: white;
  }
`;

export const Delete = styled.button``;
