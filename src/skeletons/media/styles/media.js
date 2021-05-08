import styled from "styled-components/macro";

export const Wrapper = styled.div`
  @media (max-width: 1200px) {
    & > * {
      height: 240px;
    }
  }

  @media (max-width: 800px) {
    & > * {
      height: 198px;
    }
  }

  @media (max-width: 500px) {
    & > * {
      height: 150px;
    }
  }
`;
