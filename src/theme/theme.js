export default {
  font: {
    main: {
      family: "'Source Sans Pro', sans-serif",
      weight: { light: "300", normal: "400", bold: "600" },
      size: {
        small: "0.8rem",
        normal: "1rem",
        big: "1.5rem",
        large: "2rem",
        huge: "3rem",
      },
    },
    aux: {
      family: "'Ubuntu', sans-serif",
      weight: { light: "300", normal: "400", heavy: "500", bold: "700" },
      size: {
        small: "0.8rem",
        normal: "1rem",
        big: "1.5rem",
        large: "2rem",
        huge: "3rem",
      },
    },
  },
  colors: {
    header: "#032541",
    secondary: "#1f1f1f",
    titleDark: "hsla(0,0%,100%,.5)",
    warning: "#ffc458",
    error: "#d45659",
    inputColor: "gray",
    appMainColor: "#f4f4f4",
    reviewsBackground: "#f2f2f2",
    negativeReview: "#ffe8d9",
    positiveReview: "#d9f0e1",
    auxillary: "#E0E0E0	",
    backdrop: "linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.95))",
  },
  animations: {
    fade: (enter, exit, appear) => `
    &.fade-enter {
      opacity: 0;
    }
    &.fade-enter-active {
      opacity: 1;
      transition: ${enter}ms;
    }
    &.fade-exit {
      opacity: 1;
    }
    &.fade-exit-active {
      opacity: 0;
      transition: ${exit}ms;
    }
    &.fade-appear {
      opacity: 0;
    }
    &.fade-appear-active {
      opacity: 1;
      transition: ${appear}ms;
    }`,
    slide: (from, to) => `
    &.slide-enter {
      opacity: 0;
      transform: translate(${from.x}px, ${from.y}px);
    }
    &.slide-enter-active {
      opacity: 1;
      transform: translate(0, 0);
      transition: 300ms;
    }
    &.slide-exit {
      opacity: 1;
      transform: translate(0, 0);
    }
    &.slide-exit-active {
      opacity: 0;
      transition: 300ms;
      transform: translate(${to.x}px, ${to.y}px);
    }
    &.slide-appear {
      opacity: 0;
      transform: translate(${from.x}px, ${from.y}px);
      transition: 300ms;
    }
    &.slide-appear-active {
      opacity: 1;
      transform: translate(0, 0);
      transition: 300ms;
    }`,
  },
};
