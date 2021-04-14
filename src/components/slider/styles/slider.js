import styled from "styled-components/macro";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export const Section = styled.div`
  flex-direction: column;
  position: relative;
  max-width: 1500px;
  padding-top: 5rem;
  margin: 0 auto;
  display: flex;
`;

export const Container = styled.div`
  overflow: hidden;
  display: flex;
`;

export const Inner = styled.div`
  ${({ slide }) => slide && `transform: translateX(${slide * -1500}px)`};
  display: flex;
`;

export const Item = styled.div``;

export const Poster = styled.img`
  width: 300px;
`;

export const Wrapper = styled.div``;

export const Title = styled.div``;

export const Row = styled.div``;

export const Value = styled.div``;

export const Info = styled.div``;

export const ArrowLeft = styled(BsFillCaretLeftFill)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  background-color: ${({ theme }) => theme.colors.main};
  border: 1px solid rgba(0, 0, 0, 0.5);
  transform: translate(-150%, -50%);
  border-radius: 50%;
  position: absolute;
  padding: 0.6rem;
  display: flex;
  color: white;
  top: 50%;
  left: 0;

  &:hover {
    background-color: transparent;
    transition: 300ms;
    color: black;
  }

  &:active {
    transform: translate(-150%, 10%) scale(0.8);
  }
`;

export const ArrowRight = styled(BsFillCaretRightFill)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  background-color: ${({ theme }) => theme.colors.main};
  border: 1px solid rgba(0, 0, 0, 0.5);
  transform: translate(150%, -50%);
  border-radius: 50%;
  position: absolute;
  padding: 0.6rem;
  display: flex;
  color: white;
  top: 50%;
  right: 0;

  &:hover {
    background-color: transparent;
    transition: 300ms;
    color: black;
  }

  &:active {
    transform: translate(150%, 10%) scale(0.8);
  }
`;

export const Footer = styled.div`
  margin: 0 auto;
  display: flex;
`;

export const Dot = styled.div`
  background-color: black;
  height: 50px;
  width: 50px;
`;
