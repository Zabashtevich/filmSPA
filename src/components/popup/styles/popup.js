import styled, { css } from "styled-components/macro";

import { BsX } from "react-icons/bs";

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3000;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Close = styled(BsX)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  position: absolute;
  color: white;
  right: 2%;
  top: 5%;
`;

export const Image = styled.img`
  max-height: 90%;
  max-width: 90%;
`;

export const Video = styled.iframe``;
