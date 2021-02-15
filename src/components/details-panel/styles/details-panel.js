import styled, { css } from "styled-components/macro";

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
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 6rem;
`;

export const Wrapper = styled.div`
  align-self: flex-start;
  width: 100%;
  margin-top: 1rem;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  padding: 1rem 2rem;
`;

export const Overview = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
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
  margin: 4rem 0;
  height: 80px;
  user-select: none;
  position: relative;
`;

export const Star = styled(IoIosStar)`
  font-size: ${({ theme }) => theme.fontSize.huge};
  padding: 0.2rem;
  cursor: pointer;
  color: gray;
  ${({ rated }) =>
    rated &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `}
  ${({ hoverActive }) =>
    hoverActive &&
    css`
      color: rgba(50, 25, 255, 0.6);
    `}
  & > * {
    pointer-events: none;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const Votes = styled.span`
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

export const Average = styled.span`
  font-size: ${({ theme }) => theme.fontSize.huge};
`;

export const Reviews = styled.div``;
