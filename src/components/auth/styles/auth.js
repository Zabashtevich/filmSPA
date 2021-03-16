import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  margin: 5rem auto;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin-top: 1rem;
`;

export const Form = styled.form`
  box-shadow: 0 2px 8px rgb(0 0 0 / 50%);
  justify-content: center;
  flex-direction: column;
  border-radius: 0.2rem;
  padding: 0.2rem 1rem;
  align-items: center;
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.font.aux.family};
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin: 1rem 0.5rem;
  padding: 0.3rem 0;
  outline: none;
  width: 350px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const Button = styled.button`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  background-color: ${({ theme }) => theme.colors.aux};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  padding: 0.6rem 0;
  margin-top: 6rem;
  cursor: pointer;
  outline: none;
  color: white;
  width: 100%;
  &:active {
    transform: scale(0.98);
  }
`;

export const Redirect = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  color: rgba(0, 0, 0, 0.5);
  margin: 1rem 0;
`;

export const Link = styled(ReactRouterLink)`
  color: ${({ theme }) => theme.colors.aux};
  text-decoration: none;
  margin-left: 0.2rem;
`;

export const Wrapper = styled.ul`
  color: ${({ theme }) => theme.colors.error};
  align-self: flex-start;
  visibility: hidden;
  min-height: 120px;
  opacity: 0;
  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      transition: 300ms;
      opacity: 1;
    `};
`;

export const Error = styled.li`
  margin: 1rem 0;
`;
