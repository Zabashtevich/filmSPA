import React from "react";

import {
  Container,
  ItemWrapper,
  Watchlist,
  Favorite,
  Description,
} from "./styles/tooltips";

export default function Tooltips({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Tooltips.ItemWrapper = function TooltipsItemWrapper({ children, ...rest }) {
  return <ItemWrapper {...rest}>{children}</ItemWrapper>;
};

Tooltips.Watchlist = function TooltipsWatchlist({ ...rest }) {
  return <Watchlist {...rest} />;
};

Tooltips.Favorite = function TooltipsFavorite({ ...rest }) {
  return <Favorite {...rest} />;
};

Tooltips.Description = function TooltipsDescription({ children, ...rest }) {
  return <Description {...rest}>{children}</Description>;
};
