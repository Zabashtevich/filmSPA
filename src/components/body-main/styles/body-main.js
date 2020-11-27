import styled, { css } from "styled-components/macro";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: ${({ padding }) => padding};
  ${({ background }) =>
    background &&
    css`
      background: ${background};
      border-radius: 1rem 1rem 0 0;
    `};
`;

export const BodyWrapper = styled.div`
  background: ${({ theme }) => theme.colors.appMainColor};
`;
