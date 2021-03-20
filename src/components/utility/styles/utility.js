import styled from "styled-components/macro";

import { BsFillExclamationOctagonFill } from "react-icons/bs";

export const Container = styled.div`
  ${({ theme }) => theme.animations.slide({ x: -200, y: 0 }, { x: -200, y: 0 })}
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 0.5rem;
  align-items: center;
  min-height: 175px;
  min-width: 400px;
  position: fixed;
  z-index: 2000;
  display: flex;
  bottom: 5%;
  left: 2%;
  &::after {
    transform: translate(-50%, -50%);
    border: 2px solid white;
    border-radius: 0.5rem;
    position: absolute;
    content: "";
    height: 90%;
    width: 95%;
    top: 50%;
    left: 50%;
  }
`;

export const Icon = styled(BsFillExclamationOctagonFill)`
  transform: translateY(-50%);
  position: absolute;
  font-size: 6rem;
  color: white;
  right: 10%;
  top: 50%;
`;

export const Message = styled.span``;

export const Loading = styled.div``;

export const Wrapper = styled.ul`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  padding: 0 3rem;
  color: white;
`;

export const Error = styled.li`
  margin: 0.5rem 0;
`;
