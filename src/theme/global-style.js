import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Source Sans Pro', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        box-sizing: border-box;
        &::-webkit-scrollbar {
         width: 1em;
         }
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
            border-radius: 10px;
        };
    svg > * {
        pointer-events: none;
    }
    }`;
