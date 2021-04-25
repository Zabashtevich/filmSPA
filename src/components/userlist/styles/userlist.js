import styled, { css } from "styled-components/macro";

import { BsDownload, BsCardList } from "react-icons/bs";

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  ${({ theme }) => theme.animations.fade()};
  margin-top: 5rem;
`;

export const Dropzone = styled.div`
  border: 2px dashed rgba(0, 0, 0, 0.5);
  background-color: #f3f3f3;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  user-select: none;
  transition: 300ms;
  display: flex;
  height: 250px;
  width: 500px;

  ${({ hovered }) =>
    hovered &&
    css`
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    `};
`;

export const Dropicon = styled(BsDownload)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  color: rgba(0, 0, 0, 0.5);
`;

export const Placeholder = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  color: rgba(0, 0, 0, 0.5);
  margin-top: 1rem;
`;

export const Description = styled.div``;

export const Thumbnail = styled.div``;

export const Inner = styled.div``;

export const Row = styled.div``;

export const Input = styled.div``;

export const Wrapper = styled.div``;

export const Cancel = styled.div``;

export const Confirm = styled.div``;

export const Edit = styled.div``;

export const Abort = styled.div``;
