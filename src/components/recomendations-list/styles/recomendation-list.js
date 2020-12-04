import styled from "styled-components/macro";

export const Name = styled.h4`
  margin: 1rem 1rem 1rem 0;
`;

export const ItemContainer = styled.div`
  margin: 0.5rem;
  border-radius: 1rem;
  position: relative;
  cursor: pointer;
`;

export const Miniature = styled.img`
  border-radius: 1rem;
  border: 1px solid gray;
`;

export const Container = styled.div`
  display: flex;
  overflow: scroll;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  overflow-y: hidden;
  margin-top: 6rem;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  margin: 1rem;
`;

export const ListContainer = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 10%;
  background-color: green;
  border-radius: 0.5rem;
`;

export const Score = styled.h4`
  color: #fff;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.normal};
  margin: 0.2rem;
`;
