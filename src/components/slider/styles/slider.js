import styled, { css } from "styled-components/macro";

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
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 50%;
  border: none;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  box-shadow: 2px 4px 30px 1px;
  cursor: pointer;
  ${({ direction }) =>
    direction &&
    css`
      ${direction}: -30px;
    `}
`;

export const SliderThumbnail = styled.div`
  width: inherit;
  position: absolute;
  display: flex;
  flex-direction: row;
  width: inherit;
  flex-wrap: nowrap;
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
  background: linear-gradient(
    15deg,
    hsla(50, 50%, 40%, 1) 5%,
    hsla(50, 50%, 40%, 0) 75%
  );
`;

export const SliderColor = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.5s;
  background-color: hsla(50, 50%, 40%, 1);
`;

export const SliderMetaData = styled.div`
  font-family: ${({ theme }) => theme.fontCardSlider.standart};
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  margin: 5px 30px;
  color: #fff;
  overflow: hidden;
  letter-spacing: 0.5px;
  transition: all 0.5s;
`;

export const SliderTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeightCard.bold};
  font-size: ${({ theme }) => theme.fontSize.huge};
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
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1); //Own Hover
    z-index: 75;

    ${SliderDescription} {
      opacity: 1;
    }
    ${SliderMetaData} {
      top: 30%;
    }
    ${SliderColor} {
      opacity: 0.4;
    }
  }
`;
export const SliderItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
