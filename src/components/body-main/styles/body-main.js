import styled, { css } from "styled-components/macro";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Section = styled.section`
  ${({ container }) =>
    container &&
    css`
      max-width: 1300px;
    `}
  margin: 20px 40px;
`;

export const BodyWrapper = styled.div`
  background-image: linear-gradient(
    135deg,
    #231437 0%,
    #2c385e 50%,
    #336e6b 100%
  );
`;