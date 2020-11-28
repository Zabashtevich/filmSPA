import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 400px;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Section = styled.ul`
  list-style: none;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
`;

export const Item = styled.li`
  margin: 2rem;
`;

export const ItemLink = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: #fff;
  &:hover {
    box-shadow: inset 0 -2px #fff;
  }
`;
