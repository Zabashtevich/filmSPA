import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1800px;
  margin-top: 1rem;
  justify-content: space-between;
  margin: 1rem auto;
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 320px;
  background-color: #000;
  margin: 1rem 1rem;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ItemImage = styled.img``;
export const ItemTitle = styled.h4``;
export const ItemDate = styled.span``;
export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const VoteAverage = styled.span``;
export const VoteCount = styled.span``;
