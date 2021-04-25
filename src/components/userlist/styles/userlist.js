import styled, { css } from "styled-components/macro";

import { BsDownload, BsList, BsCheck, BsX } from "react-icons/bs";

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

export const List = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 2rem;
  align-items: center;
  height: 200px;
  display: flex;
  width: 900px;
`;

export const Thumbnail = styled(BsList)`
  margin-left: 3rem;
  font-size: 6rem;
`;

export const Outer = styled.div`
  align-items: center;
  margin-left: 2rem;
  display: flex;
`;

export const Row = styled.div``;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.font.aux.family};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  background-color: transparent;
  padding: 0.2rem 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  &:disabled {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin-left: 2rem;
`;

export const Confirm = styled(BsCheck)``;

export const Cancel = styled(BsX)`
  margin-left: 1rem;
`;

export const Subrow = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.5);
  margin-top: 0.2rem;
  display: flex;
`;

export const Subtitle = styled.div``;

export const Date = styled.div`
  margin-left: 0.5rem;
`;

export const Edit = styled.div``;

export const Abort = styled.div``;
