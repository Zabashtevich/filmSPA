import styled from "styled-components/macro";

import { BsX, BsInfoCircleFill, BsExclamationCircleFill } from "react-icons/bs";

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  position: fixed;
  display: flex;
  z-index: 1000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Close = styled(BsX)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  position: absolute;
  fill: white;
  right: 2%;
  top: 3%;
`;

export const Container = styled.div`
  background-color: white;
  flex-direction: column;
  border-radius: 0.3rem;
  height: 600px;
  width: 1000px;
  display: flex;
`;

export const Header = styled.div`
  border-radius: 0.3rem 0.3rem 0 0;
  align-items: center;
  position: relative;
  display: flex;
  height: 45%;
  width: 100%;
  background-color: rgba(248, 148, 6, 1);
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  position: relative;
  font-size: 5rem;
  margin: 0 6rem;
  color: white;
  &::after {
    transform: translateY(-50%);
    background: linear-gradient(
      0deg,
      rgba(248, 148, 6, 0.3) 10%,
      rgba(255, 255, 255, 1) 50%,
      rgba(248, 148, 6, 0.3) 90%
    );
    position: absolute;
    height: 250px;
    content: "";
    width: 2px;
    left: 130%;
    top: 50%;
  }
`;

export const Error = styled(BsExclamationCircleFill)`
  position: absolute;
  font-size: 12rem;
  color: white;
  right: 10%;
`;

export const Confirm = styled(BsInfoCircleFill)`
  position: absolute;
  font-size: 12rem;
  color: white;
  right: 10%;
`;

export const Message = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin: 7rem 6rem;
  display: block;
`;

export const Wrapper = styled.div`
  display: inline-block;
  align-self: flex-end;
  margin: 0 4rem;
`;

export const Decline = styled.button`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin: 0 1rem;
  outline: none;
  &:active {
    transform: scale(0.96);
  }
`;

export const Accept = styled.button`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  background-color: rgba(248, 148, 6, 1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin: 0 1rem;
  outline: none;
  color: white;
  &:active {
    transform: scale(0.96);
  }
`;
