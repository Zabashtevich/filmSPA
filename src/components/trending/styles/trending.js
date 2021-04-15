import styled, { css } from "styled-components/macro";

export const Section = styled.div`
  position: relative;
  max-width: 1500px;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top: 0;
`;

export const Column = styled.div`
  flex-direction: column;
  display: flex;
  width: 300px;
`;

export const Menu = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-direction: column;
  align-items: center;
  user-select: none;
  margin-top: 6rem;
  max-width: 250px;
  display: flex;
  color: white;
  &:last-of-type {
    margin-top: 4rem;
  }
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border-radius: 0.3rem 0.3rem 0 0;
  text-align: center;
  padding: 0.6rem 0;
  width: 100%;
`;

export const Item = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  background-color: white;
  box-sizing: border-box;
  padding: 0.6rem 0.4rem;
  cursor: pointer;
  color: black;
  width: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 300ms;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: rgba(0, 0, 0, 0.5);
      transition: 300ms;
      color: white;
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    `};
`;

export const Container = styled.div`
  margin-top: 5rem;
  flex-wrap: wrap;
  width: 1200px;
  display: flex;
`;

export const Card = styled.div`
  margin: 0.2rem 0.4rem;
`;

export const Poster = styled.img``;

export const Wrapper = styled.div``;

export const Name = styled.div``;

export const Average = styled.div``;
