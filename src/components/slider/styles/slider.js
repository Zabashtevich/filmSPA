import styled, { css } from "styled-components/macro";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { Link as ReactRouterLink } from "react-router-dom";

export const Section = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
  max-width: 1500px;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;

  @media (min-width: 320px) {
    max-width: 240px;
  }

  @media (min-width: 510px) {
    max-width: 420px;
  }

  @media (min-width: 800px) {
    max-width: 725px;
  }

  @media (min-width: 1200px) {
    max-width: 1100px;
  }

  @media (min-width: 1400px) {
    max-width: 1300px;
  }
`;

export const Container = styled.div`
  overflow: hidden;
  display: flex;
`;

export const Inner = styled.div`
  ${({ slide }) => slide && `transform: translateX(${slide * -1500}px)`};
  transition: 300ms;
  display: flex;

  @media (min-width: 320px) {
    ${({ slide }) => slide && `transform: translateX(${slide * -240}px)`};
  }

  @media (min-width: 510px) {
    ${({ slide }) => slide && `transform: translateX(${slide * -420}px)`};
  }

  @media (min-width: 800px) {
    ${({ slide }) => slide && `transform: translateX(${slide * -725}px)`};
  }

  @media (min-width: 1200px) {
    ${({ slide }) => slide && `transform: translateX(${slide * -1100}px)`};
  }

  @media (min-width: 1400px) {
    ${({ slide }) => slide && `transform: translateX(${slide * -1300}px)`};
  }
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.6rem;
  z-index: 2000;
  color: white;
  width: 100%;
  top: 50%;
`;

export const Info = styled.div`
  visibility: hidden;
  margin-top: 1rem;
  opacity: 0;

  @media (min-width: 510px) {
    font-size: 0.7rem;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  @media (min-width: 1400px) {
    font-size: 1.2rem;
  }
`;

export const Item = styled(ReactRouterLink)`
  position: relative;

  &::after {
    position: absolute;
    z-index: 1000;
    content: "";
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    ${({ color }) =>
      color &&
      css`
        background: linear-gradient(
          15deg,
          hsla(${color}, 50%, 40%, 1) 5%,
          hsla(50, 50%, 40%, 0) 75%
        );
      `}
  }

  &::before {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    visibility: hidden;
    z-index: 1100;
    content: "";
    opacity: 0;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }

  @media (min-width: 510px) {
    &:hover {
      ${Wrapper} {
        transform: translateY(-50%);
        transition: 500ms;
      }
      ${Info} {
        visibility: visible;
        transition: 500ms;
        opacity: 1;
      }

      &::before {
        visibility: visible;
        transition: 300ms;
        opacity: 1;
      }
    }
  }
`;

export const Poster = styled.img`
  width: 300px;

  @media (min-width: 320px) {
    width: 80px;
  }

  @media (min-width: 510px) {
    width: 140px;
  }

  @media (min-width: 800px) {
    width: 145px;
  }

  @media (min-width: 1200px) {
    width: 220px;
  }

  @media (min-width: 1400px) {
    width: 260px;
  }
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  word-break: break-all;

  @media (min-width: 320px) {
    font-size: 0.8rem;
  }

  @media (min-width: 510px) {
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;

export const Row = styled.div`
  margin-top: 0.5rem;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 510px) {
    font-size: 0.8rem;
    display: flex;
  }
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  margin-right: 1rem;
`;

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

  ${({ limited }) =>
    limited &&
    css`
      background-color: rgba(0, 0, 0, 0.3);
      pointer-events: none;
      transition: 300ms;
    `};

  @media (min-width: 320px) {
    font-size: 0.8rem;
    padding: 0.2rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.2rem;
    padding: 0.4rem;
  }

  @media (min-width: 1400px) {
    font-size: 1.4rem;
    padding: 0.6rem;
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

  ${({ limited }) =>
    limited &&
    css`
      background-color: rgba(0, 0, 0, 0.3);
      pointer-events: none;
      transition: 300ms;
    `};

  @media (min-width: 320px) {
    font-size: 0.8rem;
    padding: 0.2rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.2rem;
    padding: 0.4rem;
  }

  @media (min-width: 1400px) {
    font-size: 1.4rem;
    padding: 0.6rem;
  }
`;

export const Footer = styled.div`
  margin: 0 auto;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 800px) {
    display: flex;
  }
`;

export const Dot = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: white;
  margin: 1rem 0.3rem;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  width: 20px;

  &::after {
    transform: translate(-50%, -50%);
    background-color: black;
    position: absolute;
    border-radius: 50%;
    visibility: hidden;

    content: "";
    opacity: 0;
    left: 50%;
    top: 50%;
  }

  ${({ selected }) =>
    selected &&
    css`
      &::after {
        visibility: visible;
        transition: 300ms;
        opacity: 1;
      }
    `};

  @media (min-width: 800px) {
    height: 15px;
    width: 15px;

    &::after {
      height: 8px;
      width: 8px;
    }
  }

  @media (min-width: 1200px) {
    height: 20px;
    width: 20px;

    &::after {
      height: 10px;
      width: 10px;
    }
  }
`;
