import React from "react";

import { RowListItem } from "../../../../components";

export default function RowListPopup() {
  return (
    <RowListItem.Popup>
      {Array(10)
        .fill(1)
        .map((_, index) => {
          return (
            <RowListItem.Item key={index}>
              <RowListItem.PopupNumber>{index + 1}</RowListItem.PopupNumber>
              {Array(10)
                .fill(1)
                .map((_, i) => {
                  return (
                    <RowListItem.Inner key={i + Math.random()}>
                      {i > index && <RowListItem.EmptyStar />}
                      {i <= index && <RowListItem.Star />}
                    </RowListItem.Inner>
                  );
                })}
            </RowListItem.Item>
          );
        })}
    </RowListItem.Popup>
  );
}
