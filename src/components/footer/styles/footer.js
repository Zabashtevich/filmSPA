import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Section = styled.ul`
  list-style: none;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
`;

export const Item = styled.li`
  margin: 0.5rem;
`;

export const ItemLink = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: #fff;
  &:hover {
    box-shadow: inset 0 -1px #fff;
    transition: box-shadow 200ms linear;
  }
`;
