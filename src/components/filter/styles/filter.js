import styled from "styled-components/macro";

export const Container = styled.div`
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 1rem 1rem 0 0;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: gray;
`;

export const Item = styled.div``;

export const Name = styled.span``;

export const Wrapper = styled.div``;

export const Element = styled.span``;
