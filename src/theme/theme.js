import { keyframes } from "styled-components";

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
    main: "#1f1f1f",
    warning: "#ffc458",
    error: "#d45659",
    neutral: "#f2f2f2",
    negative: "#ffe8d9",
    positive: "#d9f0e1",
    aux: "#3e495f",
    backdrop: "linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.95))",
  },
  animations: {
    fade: (enter = 500, exit = 500, appear = 500) => `
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
    skeleton: `background: linear-gradient(
      to right,
      rgb(243, 242, 241) 0%,
      rgb(237, 235, 233) 50%,
      rgb(243, 242, 241) 100%
    )
    0px 0px / 90% 100% no-repeat rgb(243, 242, 241);`,
    shake: keyframes`
     10%, 90% {
    transform: translate3d(-1px, 0, 0);
    }
  
    20%, 80% {
    transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
    transform: translate3d(4px, 0, 0);
    }`,
  },
};
