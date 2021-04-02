import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.main};
  padding-left: 3rem;
  position: fixed;
  height: 100vh;
  width: 300px;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 4rem;
  text-align: center;
  margin-top: 6rem;
  padding: 1rem 0;
  display: block;
  color: #f3f3f3;
  width: 90%;
`;

export const Row = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  position: relative;
  color: #f3f3f3;
  display: flex;
  height: 40px;
  width: 100%;
`;

export const Category = styled.span``;

export const Item = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
`;

export const Default = styled.div`
  position: absolute;
`;

export const Edit = styled.div`
  position: absolute;
`;

export const Userlist = styled.div`
  position: absolute;
`;

export const Links = styled.div`
  position: absolute;
`;

export const Arrow = styled.div`
  position: absolute;
`;

export const Link = styled(ReactRouterLink)``;
