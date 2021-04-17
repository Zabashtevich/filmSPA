import styled from "styled-components/macro";

import { BsSearch } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";

export const Inner = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  justify-content: center;
  background-color: white;
  position: absolute;
  display: flex;
  width: 100%;
  top: 100%;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
`;

export const Form = styled.form`
  align-items: center;
  position: relative;
  display: flex;
  height: 40px;
  width: 100%;
`;

export const Submit = styled.button`
  clip: rect(0 0 0 0);
  position: absolute;
  margin: -1px;
  height: 1px;
  width: 1px;
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.font.aux.family};
  margin-left: 30px;
  font-size: 1.1rem;
  outline: none;
  width: 1200px;
  border: none;
  height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0);

  &:focus {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    transition: 300ms;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #ececec;
  justify-content: center;
  position: absolute;
  display: flex;
  height: 40px;
  width: 100%;
  top: 100%;
`;

export const Wrapper = styled.div`
  align-items: center;
  width: 1300px;
  display: flex;
  height: 100%;
`;

export const Trending = styled(HiTrendingUp)``;

export const Title = styled.div``;

export const List = styled.div``;

export const Item = styled.div``;

export const Search = styled(BsSearch)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
`;

export const Movie = styled.div``;

export const Person = styled.div``;

export const Refresh = styled.div``;

export const Loading = styled.div``;

export const Nodata = styled.div``;

export const Subtitle = styled.div``;
