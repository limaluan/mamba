import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
      --blue-500: #0085FF;

      --background: #FAFAFA;
    }

    * {
      margin: 0;
      padding: 0;
      list-style: none;
      text-decoration: none;
    }

    html {
      font-size: 62.5%;
      font-family: "Inter", sans-serif;
    }
    
    body {
      font-size: 1.8rem;
    }

    button {
      all: unset;
    }
    
    h1, h2, h3, a, button {
      font-weight: 600;
    }

    h1 {
        font-size: 48px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 20px;
    }

    a {
      font-size: 16px;
      cursor: pointer;
    }

    button {
      font-size: 24px;
    }

`;
