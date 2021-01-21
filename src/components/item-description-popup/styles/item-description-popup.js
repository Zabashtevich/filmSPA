import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  background-color: white;
  z-index: 500;
  color: black;
  ${({ backgroundsecondary }) =>
    backgroundsecondary &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
      color: white;
    `}

  border-radius: 1rem;
  white-space: nowrap;
  padding: 0.6rem 0.6rem;
  position: absolute;
  top: 140%;
  left: -75%;
  &.fade-enter {
    opacity: 0;
    transform: translateX(-200px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 200ms;
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.fade-exit-active {
    opacity: 0;
    transition: 300ms;
    ${({ left }) =>
      left &&
      css`
        transform: translateX(-200px);
      `};
  }

  &.fade-exit-active {
    opacity: 0;
    transition: 300ms;
    ${({ right }) =>
      right &&
      css`
        transform: translateX(200px);
      `};
  }
`;

export const Message = styled.span`
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
`;
