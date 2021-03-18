import styled from "styled-components/macro";

export const MiniatureWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 0.5rem;
`;

export const ActiveWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.5rem;
`;

export const VideoplayerWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  position: absolute;
  top: 0;
  left: 0;
`;

export const ItemTrailerWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  padding: 0.5rem 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
`;

export const WidgetWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  position: absolute;
  top: 0;
  left: 0;
`;

export const ListPosterWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  position: absolute;
  top: 0;
  left: 0;
`;

export const DetailsCollectionWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 0, 500)};
`;

export const PopularSkeletonWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  margin: 0.6rem 0.4rem;
`;

export const TrendingSkeletonWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 0, 500)};
  margin: 0.6rem;
`;

export const CreditsWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
`;

export const FilterWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
`;
