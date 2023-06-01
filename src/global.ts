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
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
      font-family: "Inter", sans-serif;
    }
    
    body {
      font-size: 1.8rem;
    }

    button, input {
      all: unset;
    }
    
    h1, h2, h3, a, button {
      font-weight: 600;
    }

    h1 {
        font-size: 4.8rem;
    }

    h2 {
      font-size: 3.2rem;
    }

    h3 {
      font-size: 2rem;
    }

    a {
      font-size: 1.6rem;
      cursor: pointer;
    }

    button {
      font-size: 2.4rem;
    }



    @media (max-width: 992px) {
    body {
      font-size: 1.6rem;
    }

    h1, h2, h3, a, button {
      font-weight: 600;
    }

    h1 {
        font-size: 3.2rem;
    }

    h2 {
      font-size: 2.4rem;
    }

    h3 {
      font-size: 1.8rem;
    }

    a {
      font-size: 1.6rem;
      cursor: pointer;
    }

    button {
      font-size: 1.6rem;
    }
  }

`;
