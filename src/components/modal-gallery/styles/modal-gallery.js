import styled from "styled-components/macro";

export const ImagePlaceholder = styled.img`
  width: 150px;
  height: 150px;
`;

export const Wrapper = styled.div`
  width: 200px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 2rem;
  box-shadow: 4px 2px 8px 3px rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  color: #000;
  cursor: pointer;
  border-radius: 2rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.2s linear;
  }
`;
