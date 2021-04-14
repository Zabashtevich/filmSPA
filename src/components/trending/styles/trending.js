import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Section = styled.div`
  max-width: 1300px;
  width: 100%;
`;

export const Header = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  ${({ theme }) => theme.animations.fade()};
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1rem 0;
  display: flex;
`;

export const Item = styled(ReactRouterLink)`
  box-shadow: rgba(0, 0, 0, 0.8) 0px 3px 12px;
  text-decoration: none;
  position: relative;
  margin: 0.6rem 0;
  color: black;

  &::after {
    background-color: transparent;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }

  ${({ loading }) =>
    loading &&
    css`
      &::after {
        background-color: #ecebeb;
        transition: 300ms;
        z-index: 200;
      }
    `};
`;

export const Poster = styled.img`
  height: 450px;
  display: flex;
  width: 300px;
`;

export const Average = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  transform: translate(-50%, -30%);
  background-color: #ffa500;
  padding: 0.3rem 0.4rem;
  border-radius: 0.5rem;
  position: absolute;
  text-align: center;
  z-index: 300;
  color: white;
  width: 45px;
  left: 50%;
  top: 0;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  background-color: rgba(0, 0, 0, 0.7);
  text-overflow: ellipsis;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-align: center;
  margin-top: auto;
  overflow: hidden;
  display: flex;
  height: 30%;
  color: white;
  width: 100%;

  transform: translateY(100%);
  visibility: hidden;
  opacity: 0;
`;

export const Wrapper = styled.div`
  position: absolute;
  overflow-y: hidden;
  display: flex;
  height: 100%;
  z-index: 300;
  width: 100%;
  bottom: 0;

  &:hover > ${Title} {
    transform: translateY(0);
    visibility: visible;
    transition: 300ms;
    opacity: 1;
  }
`;
