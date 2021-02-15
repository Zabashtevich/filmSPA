import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Item = styled.span`
  ${({ active }) => active && css``}
`;
