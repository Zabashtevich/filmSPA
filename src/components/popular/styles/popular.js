import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  flex-direction: column;
  display: flex;
  padding-top: 10rem;
`;

export const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
`;

export const List = styled.div`
  position: relative;
  flex-direction: row;
  overflow-x: scroll;
  margin-top: 1rem;
  display: flex;
  &::-webkit-scrollbar {
    width: 1em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 10px;
  }
  &::after {
    content: "";
    position: absolute;
    width: 120px;
    height: 100%;
    right: 0;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      #fff 80%
    );
    visibility: visible;
    opacity: 1;
    transition: 300ms;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      &::after {
        visibility: hidden;
        opacity: 0;
      }
    `};
`;

export const Item = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  box-shadow: 1px 2px 10px rgb(0 0 0 / 50%);
  border-radius: 0 0 0.4rem 0.4rem;
  margin: 0.6rem 0.4rem;
  flex-direction: column;
  display: flex;
`;

export const Poster = styled.img`
  border-radius: 0.2rem 0.2rem 0 0;
  width: 250px;
`;

export const Info = styled.div`
  border-radius: 0 0 0.4rem 0.4rem;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  padding: 0 0.2rem;
  display: flex;
  height: 75px;
`;

export const Row = styled.div`
  flex-direction: column;
  padding: 0 0.2rem;
  display: flex;
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: 1.1rem;
`;

export const Date = styled.span`
  margin: 0.4rem 0;
`;

export const Average = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  align-self: flex-end;
  font-size: 0.8rem;
`;

export const Count = styled.span`
  margin: 0.4rem 0;
  font-size: 0.8rem;
`;
