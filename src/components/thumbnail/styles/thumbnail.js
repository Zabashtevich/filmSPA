import styled from "styled-components/macro";

import { FcGallery } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa";

export const Container = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  ${({ theme }) => theme.animations.fade()};
  background-color: rgba(255, 255, 255, 1);
  align-self: flex-start;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
    transition: 300ms;
  }
`;

export const Gallery = styled(FcGallery)``;

export const Trailer = styled(FaYoutube)`
  color: #ff0000;
`;
