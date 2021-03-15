import styled from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  margin: 5rem auto;
  display: flex;
`;

export const Title = styled.span``;

export const Form = styled.form`
  box-shadow: 0 2px 8px rgb(0 0 0 / 50%);
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  display: flex;
`;

export const Row = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  margin: 0.5rem;
`;

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.large};
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 0.2rem;
  outline: none;
  width: 400px;
`;

export const Button = styled.button``;

export const Redirect = styled.span``;

export const Link = styled(ReactRouterLink)``;
