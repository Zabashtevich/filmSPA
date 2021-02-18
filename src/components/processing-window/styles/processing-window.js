import styled from "styled-components/macro";

export const Container = styled.div`
  position: fixed;
  bottom: 1%;
  left: 1%;
  width: 200px;
  height: 75px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  ${({ theme }) => theme.animations.fadeLtR};
`;

export const Message = styled.span``;

export const Spinner = styled.img``;
