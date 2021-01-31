import styled from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 1rem 1rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: gray;
  margin-bottom: 3rem;
`;

export const Item = styled.div`
  width: 500px;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  white-space: nowrap;
  align-items: center;
`;

export const Name = styled.span`
  margin-right: 0.5rem;
  width: 75px;
  background-color: white;
  padding: 0.3rem 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Element = styled(ReactRouterLink)`
  margin: 0.5rem 0.3rem;
  text-decoration: none;
  color: black;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.3rem 0.5rem;
`;

export const Input = styled.input`
  width: 75px;
`;

export const Button = styled.button``;
