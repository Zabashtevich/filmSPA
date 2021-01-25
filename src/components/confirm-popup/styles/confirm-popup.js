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
  outline: orange 0.3rem solid;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  ${({ theme }) => theme.animations.fade};
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
      margin-top: 4rem;
    `}
  ${({ titlewrapper }) =>
    titlewrapper &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
    ${({ messagewrapper }) =>
    messagewrapper &&
    css`
      margin-top: 4rem;
    `}
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  color: orange;
  opacity: 0.6;
  margin-top: 1rem;
`;

export const Message = styled.span`
  margin-top: 2rem;
  color: gray;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.normal};
  outline: none;
  padding: 1rem 1rem;
  width: 200px;
  text-align: center;
  cursor: pointer;
  ${({ cancel }) =>
    cancel &&
    css`
      background-color: rgba(232, 232, 232, 0.8);
      border: 1px solid black;
      margin-right: 1rem;
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: white;
        transition: 300ms;
      }
    `};
  ${({ confirm }) =>
    confirm &&
    css`
      background-color: #ffd280;
      border: 1px solid gray;
      color: white;
      &:hover {
        background-color: white;
        color: black;
        transition: 300ms;
      }
    `}
`;
