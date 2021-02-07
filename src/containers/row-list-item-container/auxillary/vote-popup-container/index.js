import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { VotePopup } from "../../../../components";
import { useAuthContext } from "../../../../context";
import { rateLogic } from "../../../../utils/firebase";

export default function VotePopupContainer({ rated, userData, user }) {
  const [popupVisible, setPopupVisible] = useState(false);

  const firebase = useAuthContext();
  const history = useHistory();

  const popupToggler = (event) => {
    if (
      event.target.classList.value.includes("VoteStar") ||
      event.target.classList.value.includes("Vote") ||
      event.target.classList.value.includes("Icon") ||
      event.target.classList.value.includes("Highscore") ||
      event.target.classList.value.includes("popup__Container")
    ) {
      setPopupVisible((prev) => !prev);
    }
  };

  const showErrorModal = () => {};

  const handleRate = (rateScore) => {
    rateLogic(
      user,
      history,
      userData,
      rateScore,
      firebase,
      showErrorModal,
      rated,
    );
    setPopupVisible(false);
  };

  return (
    <VotePopup onClick={(e) => popupToggler(e)}>
      <VotePopup.VoteStar votestar={1} />
      <VotePopup.Highscore>{rated.value}</VotePopup.Highscore>
      <VotePopup.Icon />
      {popupVisible && (
        <VotePopup.Popup>
          {Array(10)
            .fill(1)
            .map((_, index) => {
              return (
                <VotePopup.Item
                  key={index}
                  onClick={() => handleRate(index + 1)}
                >
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
