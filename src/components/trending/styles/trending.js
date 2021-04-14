import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Section = styled.div`
  max-width: 1300px;
  width: 100%;
`;

export const Header = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  justify-content: space-evenly;
  margin-top: 1rem;
  flex-wrap: wrap;
  display: flex;
`;

export const Item = styled(ReactRouterLink)`
  box-shadow: rgba(0, 0, 0, 0.8) 0px 3px 12px;
  text-decoration: none;
  position: relative;
  color: black;
`;

export const Poster = styled.img``;

export const Average = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  transform: translate(-50%, -30%);
  background-color: #ffa500;
  padding: 0.3rem 0.4rem;
  border-radius: 0.5rem;
  position: absolute;
  color: white;
  left: 50%;
  top: 0;
`;

export const Wrapper = styled.div`
  position: absolute;
`;

export const Title = styled.div``;
