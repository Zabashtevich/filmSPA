import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  ${({ tabs }) =>
    tabs &&
    css`
      display: flex;
      justify-content: space-between;
    `}
`;

export const Inner = styled.div`
  display: flex;
`;

export const CardContainer = styled.div`
  min-height: 500px;
  min-width: 1000px;
  background-color: black;
  margin-top: 2rem;
`;
