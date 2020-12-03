import styled, { css } from "styled-components/macro";
import { IoIosStar } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.large};
  position: relative;
`;

export const Wrapper = styled.span`
  padding: 0.2rem;
  position: relative;
`;

export const Star = styled(IoIosStar)`
  cursor: pointer;
  ${({ color }) =>
    color &&
    css`
      color: grey;
    `}
`;

export const Title = styled.h3``;
