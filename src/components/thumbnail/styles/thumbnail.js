import styled from "styled-components/macro";

import { FcGallery } from "react-icons/fc";

export const Container = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
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

export const Trailer = styled()``;
