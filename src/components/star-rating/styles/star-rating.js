import styled, { css } from "styled-components/macro";
import { IoIosStar } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  max-width: 1000px;
  align-items: flex-start;
  margin: 4rem auto;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Inner = styled.span`
  padding: 0.2rem;
  position: relative;
  &:last-of-type {
    margin-right: 2rem;
  }
`;

export const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: start;
  width: 95%;
  border-top: 1px solid gray;
  margin: 0 1rem;
`;

export const Star = styled(IoIosStar)`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.huge};
  ${({ color }) =>
    color &&
    css`
      color: grey;
    `}
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.large};
`;
