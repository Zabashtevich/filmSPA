import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
`;

export const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
`;

export const List = styled.div`
  justify-content: space-around;
  flex-wrap: wrap;
  display: flex;
`;

export const Item = styled.div`
  flex-direction: column;
  margin: 0.2rem 0.4rem;
  position: relative;
  max-width: 135px;
  display: flex;
`;

export const Poster = styled.img`
  height: 200px;
`;

export const Info = styled.div`
  flex-direction: column;
  display: flex;
`;

export const Name = styled.span``;

export const Date = styled.span``;

export const Rating = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  transform: translateX(-50%);
  background-color: #ffa500;
  justify-content: center;
  border-radius: 0.4rem;
  align-items: center;
  position: absolute;
  padding: 0.2rem 0;
  display: flex;
  color: white;
  width: 35px;
  top: -3%;
  left: 50%;
`;
