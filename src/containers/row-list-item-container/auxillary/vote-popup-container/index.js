import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { VotePopup } from "../../../../components";
import { AuthContext } from "../../../../context/auth-context";
import { rateLogic } from "../../../../utils/firebase";

export default function VotePopupContainer({ item, userData, user }) {
  const [popupVisible, setPopupVisible] = useState(false);

  const { firebase } = useContext(AuthContext);
  const history = useHistory();

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

  const showErrorModal = () => {};

  const handleRate = (rateScore) => {
    rateLogic(
      user,
      history,
      userData,
      item.id,
      rateScore,
      firebase,
      showErrorModal,
      item.title,
    );
    setPopupVisible(false);
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