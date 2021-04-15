import styled, { css, keyframes } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

const linear = keyframes`
    from {
  
    background-position: 0px 0px;
    }
    100% {
    background-position: 230px 0px;
     }
}`;

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
  ${({ theme }) => theme.animations.fade()};
  margin-top: 5rem;
  flex-wrap: wrap;
  width: 1200px;
  display: flex;
`;

export const Card = styled(ReactRouterLink)`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  margin: 0.8rem 0.4rem;
  position: relative;
`;

export const Average = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  transform: translate(-50%, -50%);
  background-color: #ffa500;
  border-radius: 0.5rem;
  position: absolute;
  text-align: center;
  color: white;
  width: 45px;
  left: 50%;
  top: 0;
`;

export const Poster = styled.img`
  display: flex;
  height: 300px;
  width: 200px;
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
      background: linear-gradient(
          to right,
          rgb(243, 243, 243) 0%,
          rgb(236, 235, 235) 50%,
          rgb(243, 243, 243) 100%
        )
        0px 0px / 100% 100% rgb(236, 235, 235);
      animation: ${linear} 2s infinite linear;
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
