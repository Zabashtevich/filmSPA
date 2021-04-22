import styled from "styled-components/macro";

export const Outer = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  background-image: url(${({ url }) => url});
  background-position: right -200px top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: 100px;
  width: 100%;
`;

export const Inner = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(14.9%, 9.41%, 12.16%, 1) 150px,
    rgba(14.9%, 9.41%, 12.16%, 0.84) 100%
  );
  justify-content: center;
  display: flex;
`;

export const Container = styled.div`
  ${({ theme }) => theme.animations.fade()};
  padding: 2rem 0;
  display: flex;
  width: 1300px;
  height: 100%;
  color: white;
`;

export const Poster = styled.img`
  border-radius: 0.4rem;
`;

export const Info = styled.div`
  align-self: center;
  margin-left: 2rem;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  margin-bottom: 2rem;
  display: block;
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  display: block;
`;

export const Overview = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  margin-bottom: 2rem;
  margin-top: 1rem;
  display: block;
  width: 500px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Fieldname = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  margin-right: 0.5rem;
`;

export const Fieldvalue = styled.span``;
