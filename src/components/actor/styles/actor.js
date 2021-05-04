import styled from "styled-components/macro";

export const Container = styled.div`
  justify-content: space-around;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
`;

export const Column = styled.div`
  ${({ theme }) => theme.animations.fade()};
  flex-direction: column;
  max-width: 300px;
  display: flex;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.animations.fade(1000, 1000, 1000)};
  flex-direction: column;
  display: flex;
`;

export const Content = styled.div`
  ${({ theme }) => theme.animations.fade()};
  max-width: 900px;
  width: 100%;
`;

export const Poster = styled.img`
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  height: 450px;
  width: 300px;
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const Row = styled.div`
  flex-direction: column;
  margin: 0.5rem 0;
  display: flex;
`;

export const Fieldname = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
`;

export const Fieldvalue = styled.span``;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  margin-bottom: 3rem;
`;

export const Overview = styled.span`
  white-space: pre-line;
  margin-top: 1rem;
`;
