import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Container = styled.div`
  width: 1800px;
  margin: 20px auto;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  border: none;
  top: 40%;
  transform: translateY(-50%);
  z-index: 100;
  box-shadow: 2px 4px 30px 1px;
  cursor: pointer;
  outline: none;

  ${({ direction }) =>
    direction &&
    css`
      ${direction}: -40px;
    `}
`;

export const Thumbnail = styled.div`
  width: inherit;
  position: absolute;
  display: flex;
  flex-direction: row;
  width: inherit;
  flex-wrap: nowrap;
  z-index: 50;
`;

export const Img = styled.img`
  width: 360px;
  height: 540px;
  background-color: #fff;
`;

export const Gradient = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  transition: all 3s linear;
  ${({ color }) =>
    color &&
    css`
      background: linear-gradient(
        15deg,
        hsla(${color}, 50%, 40%, 1) 5%,
        hsla(50, 50%, 40%, 0) 75%
      );
    `}
`;

export const Color = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.5s;
  background-color: ${({ color }) => `hsla(${color}, 50%, 40%, 1)`};
`;

export const Metadata = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 55%;
  margin: 5px 30px;
  color: #fff;
  overflow: hidden;
  letter-spacing: 0.5px;
  transition: all 0.5s;
  z-index: 50;
`;

export const Title = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  text-decoration: none;
  color: #fff;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
`;

export const TagItem = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.font.aux.weight.normal};
  &:nth-child(2n) {
    margin: 0 10px;
  }
`;

export const Description = styled.div`
  line-height: 1.5rem;
  transition: all 0.5s;
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  opacity: 0;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

export const Dot = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  border: solid 2px #6b6b6b;
  border-radius: 50%;
  margin: 1rem 0.5rem;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    `}
`;

export const Item = styled.div`
  position: relative;
  width: 360px;
  height: 540px;
  z-index: 50;
  transition: all 1s;

  &.fade-appear {
    opacity: 0;
  }

  &.fade-appear-active {
    opacity: 1;
    transition: opacity 500ms forwards;
  }
  &.fade-appear-done,
  &.fade-enter-done {
    &:hover {
      transform: scale(1.03); //Own Hover
      z-index: 51;
    }
  }

  &.fade-enter {
    opacity: 0;
    transform: translateY(50px);
  }
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 250ms linear, transform 250ms linear;
  }

  &.fade-exit {
    opacity: 1;
    transform: translateY(0);
    display: none;
  }
  &.fade-exit-active {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 250ms linear, transform 250ms linear;
  }
  &:hover {
    ${Description} {
      opacity: 1;
    }
    ${Metadata} {
      top: 30%;
    }
    ${Color} {
      opacity: 0.6;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LinkButton = styled(ReactRouterLink)`
  width: 45px;
  height: 45px;
  z-index: 100;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  border: 1px #fff solid;
  border-radius: 50%;
  cursor: pointer;
`;

export const ButtonIcon = styled(HiOutlineArrowRight)`
  color: #fff;
  position: absolute;
  font-size: ${({ theme }) => theme.font.aux.size.large};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
