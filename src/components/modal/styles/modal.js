import styled, { css } from "styled-components/macro";

import { CgClose } from "react-icons/cg";

export const Container = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: white;
  position: relative;
  width: 900px;
  height: 400px;
`;

export const Header = styled.div`
  height: 40%;
  ${({ type }) =>
    type === "error" &&
    css`
      background-color: ${({ theme }) => theme.colors.error};
    `};
  ${({ type }) =>
    type === "confirm" &&
    css`
      background-color: ${({ theme }) => theme.colors.warning};
    `};
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  padding: 1rem 2rem;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
`;

export const Message = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin: 2rem auto;
`;

export const Inner = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: auto;
`;

export const Button = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0.4rem 0.8rem;
  border-radius: 0.2rem;
  cursor: pointer;
  margin: 0.5rem;
  display: flex;
  ${({ type }) =>
    type === "confirm" &&
    css`
      background-color: ${({ theme }) => theme.colors.warning};
      color: white;
    `};
`;

export const Close = styled(CgClose)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  position: absolute;
  color: white;
  right: 1%;
  top: 2%;
`;
