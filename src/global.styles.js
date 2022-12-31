import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    a {
    text-decoration: none;
    color: black;
    padding-right: 10px;
    }

    * {
    box-sizing: border-box;
    }
`;
