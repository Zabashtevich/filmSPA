import styled from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1300px;
  margin: 4rem auto;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Overview = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  margin: 0 1rem;
  padding: 1rem;
  border-top: 1px solid gray;
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
`;

export const LinkButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  align-self: center;
  border-radius: 1rem;
  border: 1px solid gray;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
  padding: 0.4rem 1rem;
  margin: 2rem 0;
  cursor: pointer;
  outline: none;
  &:hover {
    border: 1px solid gray;
    background-color: #fff;
    color: ${({ theme }) => theme.colors.secondary};
    transition: 250ms;
  }
`;
