import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  height: 75px;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const Wrapper = styled.div`
  margin-left: 300px;
  display: flex;
`;

export const Tab = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  position: relative;
  user-select: none;
  cursor: pointer;
  margin: 0 1rem;
  ${({ selected }) =>
    selected &&
    css`
      &::after {
        transform: translateX(-50%);
        background-color: black;
        position: absolute;
        content: "";
        width: 100%;
        height: 3px;
        top: 130%;
        left: 50%;
      }
    `};
`;

export const All = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  color: ${({ theme }) => theme.colors.aux};
  user-select: none;
  margin-left: auto;
  cursor: pointer;
`;

export const Scroller = styled.div`
  position: relative;
  overflow-x: scroll;
  display: flex;
  &::after {
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      #fff 80%
    );
    position: absolute;
    height: 100%;
    content: "";
    width: 50px;
    right: 0;
  }
  & > img:first-child {
    border-radius: 0.5rem 0 0;
  }
`;

export const Backdrop = styled.img`
  height: 300px;
`;

export const Poster = styled.img``;

export const Video = styled.div`
  position: relative;
  width: 533px;
  height: 300px;
  ${({ url }) =>
    url &&
    css`
      background-color: white;
      background-image: url(${url});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    `};
`;

export const Inner = styled.div`
  position: absolute;
`;

export const Play = styled.div``;
