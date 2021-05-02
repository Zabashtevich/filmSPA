import styled from "styled-components/macro";

export const Outer = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-top: 2rem;
  max-height: 100vh;
  display: flex;
  width: 100%;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
`;

export const Placeholder = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  color: rgba(0, 0, 0, 0.5);

  margin-top: 2rem;
`;

export const Header = styled.div``;

export const Thumbnail = styled.div``;

export const Inner = styled.div``;

export const Input = styled.div``;

export const Info = styled.div``;

export const Subtitle = styled.div``;

export const Date = styled.div``;

export const Wrapper = styled.div``;

export const Confirm = styled.div``;

export const Cancel = styled.div``;

export const Tools = styled.div``;

export const Delete = styled.div``;

export const Edit = styled.div``;
