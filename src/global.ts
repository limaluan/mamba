import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }

    html {
      font-size: 62.5%;
      font-family: "Inter", sans-serif;
    }
    
    body {
      font-size: 1.8rem;
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
    }

    button {
      font-size: 24px;
    }

`;
