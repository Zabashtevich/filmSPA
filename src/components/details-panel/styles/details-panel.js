import styled from "styled-components/macro";

import { IoIosStar } from "react-icons/io";

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: 6rem;
`;

export const Wrapper = styled.div`
  align-self: flex-start;
  width: 100%;
  padding: 1rem 2rem;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
`;

export const Overview = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  width: 600px;
  margin: 2rem auto;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 2rem 4rem;
  border-radius: 0.4rem;
`;

export const Star = styled(IoIosStar)``;

export const Rating = styled.div``;

export const Votes = styled.div``;

export const Average = styled.div``;

export const Reviews = styled.div``;
