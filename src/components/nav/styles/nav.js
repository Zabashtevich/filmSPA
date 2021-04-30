import styled from "styled-components/macro";

export const Inner = styled.div`
  flex-direction: column;
  align-items: center;

  height: 100vh;
  display: flex;
  width: 300px;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  border-bottom: 3px solid rgba(0, 0, 0, 1);
  background-color: #262626;
  text-align: center;
  padding: 1rem 0;
  display: block;
  color: white;
  width: 100%;
`;

export const Category = styled.div`
  background-color: #404040;
  width: 100%;
`;

export const Subtitle = styled.div``;

export const Subcategory = styled.div``;

export const Container = styled.div``;

export const Item = styled.div``;

export const Name = styled.div``;

export const Link = styled.div``;

export const Chain = styled.div``;

export const Value = styled.div``;

export const Thumbnail = styled.div``;

export const Button = styled.div``;

export const Close = styled.div``;

export const List = styled.div``;

export const Create = styled.div``;

export const Arrow = styled.div``;

export const Heart = styled.div``;
