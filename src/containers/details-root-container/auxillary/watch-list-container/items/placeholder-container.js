import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { WatchList } from "../../../../../components";

export default function PlaceholderContainer() {
  return (
    <TransitionGroup>
      <CSSTransition
        appear={true}
        classNames="fade"
        timeout={{ enter: 200, exit: 300, appear: 300 }}
      >
        <WatchList.ItemContainer placeholder={1}>
          <WatchList.Placeholder>
            You have not any list but you can create one
          </WatchList.Placeholder>
        </WatchList.ItemContainer>
      </CSSTransition>
    </TransitionGroup>
  );
}
