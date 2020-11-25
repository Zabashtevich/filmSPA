import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Container = styled.div`
  width: 1800px;
  margin: 20px 0;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SliderButton = styled.button`
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

export const SliderThumbnail = styled.div`
  width: inherit;
  position: absolute;
  display: flex;
  flex-direction: row;
  width: inherit;
  flex-wrap: nowrap;
  z-index: 50;
`;

export const SliderImg = styled.img`
  width: 360px;
  height: 540px;
`;

export const SliderGradient = styled.div`
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

export const SliderColor = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.5s;
  background-color: ${({ color }) => `hsla(${color}, 50%, 40%, 1)`};
`;

export const SliderMetaData = styled.div`
  font-family: ${({ theme }) => theme.fontCardSlider.standart};
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

export const SliderTitle = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.fontWeightCard.bold};
  font-size: ${({ theme }) => theme.fontSize.huge};
  text-decoration: none;
  color: #fff;
`;

export const SliderTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`;

export const SliderTagItem = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightCard.normal};
  &:nth-child(2n) {
    margin: 0 10px;
  }
`;

export const SliderDescription = styled.div`
  line-height: 1.5rem;
  transition: all 0.5s;
  font-weight: ${({ theme }) => theme.fontWeightCard.light};
  opacity: 0;
`;

export const SliderDotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const SliderDot = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border: #fff solid 2px;
  border-radius: 50%;
  margin: 20px 5px;
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
        background-color: #fff;
      }
    `}
`;

export const SliderItem = styled.div`
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
    ${SliderDescription} {
      opacity: 1;
    }
    ${SliderMetaData} {
      top: 30%;
    }
    ${SliderColor} {
      opacity: 0.6;
    }
  }
`;

export const SliderItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SliderLinkButton = styled(ReactRouterLink)`
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

export const SliderLinkButtonIcon = styled(HiOutlineArrowRight)`
  color: #fff;
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.large};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
