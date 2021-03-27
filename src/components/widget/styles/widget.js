import styled from "styled-components/macro";

import { BsChevronExpand } from "react-icons/bs";

export const Container = styled.div`
  justify-content: space-between;
  background-color: #f3f3f3;
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  display: flex;
  color: black;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  position: relative;
`;

export const Arrow = styled(BsChevronExpand)`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin-left: 0.3rem;
`;

export const List = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  justify-content: center;
  background-color: white;
  flex-direction: column;
  border-radius: 0.2rem;
  top: calc(100% + 8px);
  align-items: center;
  position: absolute;
  display: flex;
  width: 100%;
  left: 0;
`;

export const Favorite = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem 0.2rem 0 0;
  box-sizing: border-box;
  padding: 0.4rem 0.6rem;
  display: inline-block;
  margin-bottom: -1px;
  width: 100%;
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 0.4rem 0.6rem;
  display: inline-block;
  margin-bottom: -1px;
  width: 100%;
`;

export const Item = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 0.4rem 0.6rem;
  display: inline-block;
  margin-bottom: -1px;
  width: 100%;
`;

export const Link = styled.div``;

export const Heart = styled.div``;
