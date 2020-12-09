import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
  ${({ background }) =>
    background &&
    css`
      background: linear-gradient(180deg, #000 724px, #232323 99%);
    `}
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  width: inherit;
  z-index: 100;
`;

export const BackgroundWrapper = styled.div`
  position: relative;
  width: inherit;
  height: 500px;
  overflow: hidden;
`;

export const BackgroundImageColor = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 95%,
    rgba(0, 0, 0, 0.7) 100%
  );
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  opacity: 0.15;
  width: inherit;
  height: auto;
`;
