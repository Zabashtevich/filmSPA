import styled, { css } from "styled-components/macro";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { Link as ReactRouterLink } from "react-router-dom";

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
  transition: 300ms;
  display: flex;
`;

export const Wrapper = styled.div`
  transform: translateY(120px);
  position: absolute;
  padding: 0 0.6rem;
  z-index: 2000;
  color: white;
  top: 50%;
`;

export const Info = styled.div`
  visibility: hidden;
  margin-top: 2rem;
  opacity: 0;
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

  &:hover {
    ${Wrapper} {
      transform: translateY(0);
      transition: 500ms;
    }
    ${Info} {
      visibility: visible;
      transition: 500ms;
      opacity: 1;
    }
  }
`;

export const Poster = styled.img`
  width: 300px;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const Row = styled.div`
  margin-top: 0.5rem;
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
`;

export const Footer = styled.div`
  margin: 0 auto;
  display: flex;
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
    height: 10px;
    width: 10px;
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
`;
