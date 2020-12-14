import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
`;

export const Wrapper = styled.div``;

export const Button = styled.button`
  outline: none;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid gray;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
