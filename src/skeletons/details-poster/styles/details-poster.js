import styled from "styled-components/macro";

export const PosterWrapper = styled.div`
  @media (max-width: 1200px) {
    & > * {
      height: 350px;
      width: calc(250px / 1.5);
      border-radius: 0.5rem;
    }
  }

  @media (max-width: 900px) {
    & > * {
      height: 250px;
    }
  }
`;

export const RowsWrapper = styled.div`
  @media (min-width: 1200px) {
    & > {
      width: 700px;
    }
  }

  @media (max-width: 1200px) {
    & > * {
      width: 500px;
    }
  }

  @media (max-width: 900px) {
    & > * {
      width: 400px;
    }
  }

  @media (max-width: 620px) {
    margin-top: 2rem;
    & > {
      width: 320px;
    }
  }
`;

export const CardWrapper = styled.div``;
