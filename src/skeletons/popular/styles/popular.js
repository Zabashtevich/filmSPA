import styled from "styled-components/macro";

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 0.1rem;
  display: flex;

  @media (min-width: 1100px) {
    & > * {
      width: 250px;
      height: 442px;
    }
  }

  @media (max-width: 1100px) {
    & > * {
      width: 200px;
      height: 362px;
    }
  }

  @media (max-width: 750px) {
    & > * {
      width: 150px;
      height: 272px;
    }
  }

  @media (max-width: 750px) {
    & > * {
      width: 100px;
      height: 197px;
    }
  }
`;
