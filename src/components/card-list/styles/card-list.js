import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1800px;
  margin-top: 1rem;
  justify-content: space-between;
  margin: 2rem auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;
export const ItemImage = styled.img`
  width: 400px;
  height: 600px;
`;
export const ItemTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.huge};
`;
export const ItemDate = styled.h4``;

export const VoteAverage = styled.h4``;

export const VoteCount = styled.h4``;

export const ItemDescriptionInner = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  color: #fff;
  text-align: center;
  position: absolute;
  opacity: 0;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
    ${ItemDescriptionInner} {
      opacity: 1;
      transition: opacity 1s;
    }
    ${ItemImage} {
      transform: scale(1.05);
      transition: transform 4s;
    }
  }
`;
