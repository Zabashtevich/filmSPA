import styled, { css, keyframes } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Section = styled.div`
  flex-direction: column;
  align-items: center;
  max-width: 1500px;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};

  @media (max-width: 850px) {
    font-size: 1.3rem;
  }
`;

export const Outer = styled.div`
  display: flex;

  @media (max-width: 750px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  flex-direction: column;
  display: flex;
  width: 300px;

  @media (max-width: 750px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`;

export const Menu = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  user-select: none;
  margin-top: 6rem;
  display: flex;
  color: white;

  &:last-of-type {
    margin-top: 4rem;
  }

  @media (min-width: 750px) {
    max-width: 250px;
  }

  @media (max-width: 750px) {
    justify-content: center;
    border-radius: 0.5rem;
    flex-direction: row;
    overflow: hidden;
    margin: 0;

    &:last-of-type {
      margin: 0;
    }
  }
`;

export const Subtitle = styled.h3`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border-radius: 0.3rem 0.3rem 0 0;
  box-sizing: border-box;
  padding: 0.6rem 1rem;
  white-space: nowrap;
  text-align: center;
  width: 100%;
  margin: 0;

  @media (max-width: 850px) {
    font-size: 1rem;
  }

  @media (max-width: 750px) {
    padding: 0.5rem 0.3rem;
    font-size: 0.6rem;
    border-radius: 0;
  }
`;

export const Item = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  background-color: white;
  box-sizing: border-box;
  padding: 0.6rem 1rem;
  cursor: pointer;
  display: block;
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

  @media (max-width: 750px) {
    padding: 0.5rem 0.3rem;
    font-size: 0.6rem;
    border: none;

    ${({ selected }) =>
      selected &&
      css`
        border: none;
      `};
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.animations.fade()};
  justify-content: center;
  max-width: 1200px;
  margin-top: 5rem;
  flex-wrap: wrap;
  display: flex;

  @media (max-width: 750px) {
    margin-top: 1rem;
  }
`;

export const Card = styled(ReactRouterLink)`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  margin: 0.8rem 0.4rem;
  position: relative;

  @media (max-width: 750px) {
    margin: 0.4rem 0.2rem;
  }
`;

export const Average = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  transform: translate(-50%, -50%);
  background-color: #ffa500;
  border-radius: 0.5rem;
  position: absolute;
  text-align: center;
  padding: 0.2rem 0.4rem;
  color: white;
  left: 50%;
  top: 0;

  @media (max-width: 750px) {
    font-size: 0.8rem;
  }
`;

export const Poster = styled.img`
  display: flex;
  height: 300px;
  width: 200px;

  @media (max-width: 1200px) {
    height: 240px;
    width: 160px;
  }

  @media (max-width: 950px) {
    height: 180px;
    width: 120px;
  }

  @media (max-width: 550px) {
    height: 120px;
    width: 80px;
  }
`;

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateY(100%);
  justify-content: center;
  align-items: center;
  position: absolute;
  visibility: hidden;
  display: flex;
  height: 30%;
  width: 100%;
  opacity: 0;
  top: 70%;
`;

export const Inner = styled.div`
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

  &:hover ${Wrapper} {
    transform: translateY(0);
    visibility: visible;
    transition: 500ms;
    opacity: 1;
  }

  ${({ loading }) =>
    loading &&
    css`
      background: ${({ theme }) => theme.colors.skeleton};
      animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
    `};
`;

export const Name = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  width: 90%;

  color: white;
`;
