import styled from "styled-components/macro";

import { BsFillImageFill } from "react-icons/bs";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

export const Face = styled.div``;

export const Icon = styled(BsFillImageFill)``;

export const Backdrop = styled.div`
  ${({ theme }) => theme.animations.fade};
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Container = styled.div``;

export const Close = styled(CgClose)``;

export const Active = styled.img``;

export const Wrapper = styled.div``;

export const Button = styled.div``;

export const Arrow = styled(FaArrowAltCircleLeft)``;

export const Miniature = styled.div``;
