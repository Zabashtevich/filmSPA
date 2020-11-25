import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 500px;
  margin-top: 1rem;
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 420px;
  background-color: #fff;
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
