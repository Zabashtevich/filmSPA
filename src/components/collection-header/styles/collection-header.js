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
  padding: 2rem 0;
  display: flex;
  width: 1300px;
  height: 100%;
  color: white;
`;

export const Poster = styled.img`
  border-radius: 0.4rem;
`;

export const Info = styled.div``;

export const Title = styled.div``;

export const Subrow = styled.div``;

export const Subtitle = styled.div``;

export const Overview = styled.div``;

export const Row = styled.div``;

export const Fieldname = styled.div``;

export const Fieldvalue = styled.div``;
