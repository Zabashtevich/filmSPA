import styled, { css } from "styled-components/macro";

import { ImWarning } from "react-icons/im";

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  min-width: 900px;
  min-height: 600px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 1rem;
  border: orange 0.5rem solid;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const ContainerBackground = styled(ImWarning)`
  font-size: 12rem;
  fill: orange;
  opacity: 0.5;
  margin-top: 4rem;
`;

export const Wrapper = styled.div`
  ${({ buttonswrapper }) =>
    buttonswrapper &&
    css`
      display: flex;
      justify-content: center;
      background-color: gray;
      width: 100%;
      border-radius: 0.5rem;
    `}
  ${({ titlewrapper }) =>
    titlewrapper &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  color: orange;
  opacity: 0.6;
  margin-top: 1rem;
`;

export const Message = styled.span``;

export const ButtonsWrapper = styled.div``;

export const Button = styled.button``;
