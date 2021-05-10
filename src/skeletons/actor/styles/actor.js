import styled from "styled-components/macro";

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Poster = styled.div`
  ${({ theme }) => theme.animations.skeleton};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  height: 450px;
  width: 300px;
`;

export const Title = styled.div``;

export const Row = styled.div``;

export const Fieldname = styled.div``;

export const Fieldvalue = styled.div``;
