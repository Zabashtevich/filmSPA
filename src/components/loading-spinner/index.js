import React from "react";
import loadingSpinnerMedium from "../../assets/spinner-medium.svg";
import loadingSpinnerSmall from "../../assets/spinner-small.svg";

export function SpinnerMedium() {
  return <img src={loadingSpinnerMedium} alt="loading spinner" />;
}

export function SpinnerSmall({ width = null, color = null }) {
  return (
    <img
      src={loadingSpinnerSmall}
      alt="loading spinner"
      style={{ width: `${width}`, fill: `white` }}
    />
  );
}
