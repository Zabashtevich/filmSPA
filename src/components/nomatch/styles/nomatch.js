import styled from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  display: flex;
  width: 100%;
`;

export const Message = styled.h1`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  color: rgba(0, 0, 0, 0.4);

  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.font.aux.size.large};
  }
`;

export const Return = styled(ReactRouterLink)`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-size: ${({ theme }) => theme.font.aux.size.big};
  background-color: #3f3f3f;
  border-radius: 0.5rem;
  padding: 0.2rem 0.6rem;
  text-decoration: none;
  color: white;

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3f3f3f,
      rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    outline: none;
  }

  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.font.aux.size.normal};
  }
`;
