import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  justify-content: space-around;
  min-height: 300px;
  padding-top: 2rem;
  margin-top: 5rem;
  display: flex;

  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Section = styled.ul`
  flex-direction: column;
  list-style: none;
  display: flex;
`;

export const Item = styled.li`
  margin: 0.5rem;

  @media (max-width: 500px) {
    margin: 0.1rem;
  }
`;

export const ItemLink = styled.a`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  text-decoration: none;
  display: block;
  width: 120px;
  color: #fff;

  &:hover {
    box-shadow: inset 0 -1px #fff;
    transition: box-shadow 200ms linear;
  }

  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;
