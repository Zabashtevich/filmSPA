import styled from "styled-components/macro";

import { AiFillYoutube } from "react-icons/ai";

export const Face = styled.div`
  background-color: #fafafa;
  justify-content: center;
  border-radius: 0.3rem;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  display: flex;
  cursor: pointer;
`;

export const Thumbnail = styled.img`
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 0.3rem;
  width: 220px;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: 300ms;
  }
`;

export const Icon = styled(AiFillYoutube)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  position: absolute;
  color: #ff0000;
  top: -5%;
  right: 2%;
`;

export const Backdrop = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.animations.fade()};
  justify-content: center;
  align-items: center;
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Content = styled.div``;

export const Videoplayer = styled.div``;

export const Wrapper = styled.div``;

export const Poster = styled.div``;

export const Info = styled.div``;

export const Title = styled.div``;

export const Year = styled.div``;

export const Description = styled.video``;

export const Metainfo = styled.div``;

export const Average = styled.div``;

export const Count = styled.div``;

export const Else = styled.div``;

export const Item = styled.div``;

export const Container = styled.div``;
