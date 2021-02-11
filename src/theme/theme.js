export default {
  fontFamily: {
    main: "'Source Sans Pro', sans-serif",
    secondary: "'Roboto', sans-serif;",
  },
  fontWeightMain: {
    light: "300",
    normal: "400",
    bold: "600",
  },
  fontWeightSecondary: {
    light: "300",
    normal: "400",
    bold: "700",
  },
  fontSize: {
    small: "1rem",
    normal: "1.5rem",
    large: "2rem",
    huge: "3rem",
    logo: "3.5rem",
  },
  colors: {
    header: "#032541",
    secondary: "#1f1f1f",
    titleDark: "hsla(0,0%,100%,.5)",
    warning: "#ffbd45",
    error: "#d45659",
    inputColor: "gray",
    appMainColor: "#f4f4f4",
    reviewsBackground: "#f2f2f2",
    negativeReview: "#ffe8d9",
    positiveReview: "#d9f0e1",
  },
  animations: {
    fadeLtR: `&.fade-enter {
      opacity: 0;
      transform: translateX(-300px);
    }
    &.fade-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: 500ms;
    }
    &.fade-exit {
      opacity: 1;
      transform: translateX(0);
    }
    &.fade-exit-active {
      opacity: 0;
      transition: 600ms;
      transform: translateX(300px);
    }
    &.fade-appear {
      opacity: 0;
      transform: translateX(-300px);
    }
    &.fade-appear-active {
      opacity: 1;
      transform: translateX(0);
      transition: 500ms;
    }`,
    opacity: `&.fade-enter {
      opacity: 0;
    }
    &.fade-enter-active {
      opacity: 1;
      transition: 500ms;
    }
    &.fade-exit {
      opacity: 1;
    }
    &.fade-exit-active {
      opacity: 0;
      transition: 500ms;
    }
    &.fade-appear {
      opacity: 0;
    }
    &.fade-appear-active {
      opacity: 1;
      transition: 500ms;
    }`,
    opacityLong: `&.fade-enter {
      opacity: 0;
    }
    &.fade-enter-active {
      opacity: 1;
      transition: 1000ms;
    }
    &.fade-exit {
      opacity: 1;
    }
    &.fade-exit-active {
      opacity: 0;
      transition: 2000ms;
    }
    &.fade-appear {
      opacity: 0;
    }
    &.fade-appear-active {
      opacity: 1;
      transition: 1000ms;
    }`,
    fadeLtL: `&.fade-enter {
      opacity: 0;
      transform: translateX(-300px);
    }
    &.fade-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: 500ms;
    }
    &.fade-exit {
      opacity: 1;
      transform: translateX(0);
    }
    &.fade-exit-active {
      opacity: 0;
      transition: 600ms;
      transform: translateX(-300px);
    }
    &.fade-appear {
      opacity: 0;
      transform: translateX(-300px);
    }
    &.fade-appear-active {
      opacity: 1;
      transform: translateX(0);
      transition: 500ms;
    }`,
    fadeRtR: `&.fade-enter {
      opacity: 0;
      transform: translateX(300px);
    }
    &.fade-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: 500ms;
    }
    &.fade-exit {
      opacity: 1;
      transform: translateX(0);
    }
    &.fade-exit-active {
      opacity: 0;
      transition: 600ms;
      transform: translateX(300px);
    }
    &.fade-appear {
      opacity: 0;
      transform: translateX(300px);
    }
    &.fade-appear-active {
      opacity: 1;
      transform: translateX(0);
      transition: 500ms;
    }`,
    fadeRtL: `&.fade-enter {
      opacity: 0;
      transform: translateX(300px);
    }
    &.fade-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: 500ms;
    }
    &.fade-exit {
      opacity: 1;
      transform: translateX(0);
    }
    &.fade-exit-active {
      opacity: 0;
      transition: 600ms;
      transform: translateX(-300px);
    }
    &.fade-appear {
      opacity: 0;
      transform: translateX(300px);
    }
    &.fade-appear-active {
      opacity: 1;
      transform: translateX(0);
      transition: 500ms;
    }`,
    fadeRightTransform: `&.fade-enter {
      left: 0;
      opacity: 0;
    }
    &.fade-enter-active {
      opacity: 0.5;
      left: 50%;
      transition: 500ms;
    }
    &.fade-exit {
      opacity: 0.5;
      left: 50%;
    }
    &.fade-exit-active {
      opacity: 0;
      transition: 600ms;
      left: 100%;
    }
    &.fade-appear {
      left: 0;
      opacity: 0;
    }
    &.fade-appear-active {
      opacity: 0.5;
      left: 50%;
      transition: 500ms;
    }`,
  },
};
