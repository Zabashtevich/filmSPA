import React, { useState } from "react";

import { VotePopup } from "../../../../components";

export default function VotePopupContainer({ item, index }) {
  const [popupVisible, setPopupVisible] = useState(false);

  const popupToggler = (event) => {
    if (
      event.target.classList.value.includes("VoteStar") ||
      event.target.classList.value.includes("Vote") ||
      event.target.classList.value.includes("Icon") ||
      event.target.classList.value.includes("Highscore")
    ) {
      setPopupVisible((prev) => !prev);
    }
  };

  return (
    <VotePopup onClick={(e) => popupToggler(e)}>
      <VotePopup.VoteStar votestar={1} />
      <VotePopup.Highscore>{item.highscore}</VotePopup.Highscore>
      <VotePopup.Icon />
      {popupVisible && (
        <VotePopup.Popup>
          {Array(10)
            .fill(1)
            .map((_, index) => {
              return (
                <VotePopup.Item key={index}>
                  <VotePopup.Number>{index + 1}</VotePopup.Number>
                  {Array(10)
                    .fill(1)
                    .map((_, i) => {
                      return (
                        <VotePopup.Inner key={i + Math.random()}>
                          {i > index && <VotePopup.EmptyStar />}
                          {i <= index && <VotePopup.Star />}
                        </VotePopup.Inner>
                      );
                    })}
                </VotePopup.Item>
              );
            })}
        </VotePopup.Popup>
      )}
    </VotePopup>
  );
}
