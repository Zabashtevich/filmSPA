import styled from "styled-components/macro";

export const Container = styled.div`
  ${({ theme }) =>
    theme.animations.slide({ x: -100, y: 0 }, { x: -100, y: 0 })};
  background-color: ${({ theme }) => theme.colors.main};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 3px solid gray;
  align-items: center;
  border-radius: 6px;
  min-height: 150px;
  min-width: 200px;
  position: fixed;
  padding: 0 2rem;
  display: flex;
  z-index: 2000;
  top: 80%;
  left: 5%;
`;

export const Message = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  color: white;
`;

export const Spinner = styled.img`
  margin-left: 1rem;
`;
