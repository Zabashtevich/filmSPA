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
  margin-top: 3rem;
  flex-wrap: wrap;
  display: flex;
`;

export const Info = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, 100%);
  justify-content: center;
  position: absolute;
  visibility: hidden;
  font-size: 1.2rem;
  padding: 2rem 0;
  display: flex;
  color: white;
  width: 100%;
  opacity: 0;
  bottom: 0;
  left: 50%;
`;

export const Item = styled.div`
  flex-direction: column;
  margin: 0.2rem 0.4rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  &:hover {
    ${Info} {
      transform: translate(-50%, 0);
      visibility: visible;
      transition: 300ms;
      opacity: 1;
    }
  }
`;

export const Poster = styled.img``;

export const Name = styled.span`
  margin: 0 0.2rem;
`;

export const Date = styled.span`
  margin: 0 0.2rem;
`;

export const Rating = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  transform: translateX(-50%);
  background-color: #ffa500;
  justify-content: center;
  border-radius: 0.4rem;
  align-items: center;
  position: absolute;
  padding: 0.2rem 0.3rem;
  display: flex;
  color: white;
  left: 50%;
  top: 2%;
`;
