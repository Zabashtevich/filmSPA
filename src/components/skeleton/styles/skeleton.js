import styled from "styled-components/macro";

export const ActiveWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.5rem;
`;
