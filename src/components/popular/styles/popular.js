import styled from "styled-components/macro";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  flex-direction: column;
  display: flex;
  padding-top: 10rem;
`;

export const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const List = styled.div`
  flex-direction: row;
  overflow-x: scroll;
  margin-top: 1rem;
  display: flex;
`;

export const Info = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 0.2rem 0.2rem;
  text-align: center;
  position: absolute;
  padding: 1rem 0;
  color: white;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const Item = styled.div`
  ${({ theme }) => theme.animations.fade()};
  position: relative;
  margin: 0 0.2rem;
  cursor: pointer;
  display: flex;
  &:hover {
    ${Info} {
      opacity: 0;
      visibility: hidden;
      transition: 300ms;
    }
  }
`;

export const Poster = styled.img`
  border-radius: 0.4rem;
  width: 150px;
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  display: block;
`;

export const Date = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
`;

export const Meta = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  display: flex;
  right: -1%;
  top: 2%;
`;

export const Average = styled.div`
  border-radius: 0.4rem 0 0 0.4rem;
  background-color: green;
  padding: 0.2rem 0.4rem;
  color: white;
`;

export const Count = styled.div`
  background-color: #f3f3f3;
  padding: 0.2rem 0.4rem;
`;
