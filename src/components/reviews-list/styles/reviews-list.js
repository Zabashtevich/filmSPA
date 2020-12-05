import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 750px;
  margin: 0 auto;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.secondary};
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

export const Content = styled.span`
  line-height: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
`;

export const ItemContainer = styled.div`
  background: ${({ theme }) => theme.colors.reviewsBackground};
  border-radius: 1rem;
  border-top: 1rem;
  margin-top: 2rem;
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
