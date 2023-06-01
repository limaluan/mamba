import { styled } from "styled-components";

export const HomeContainer = styled.main`
  height: calc(100vh - 8rem);

  .desktop-only {
    display: initial;
  }

  .mobile-only {
    display: none;
  }

  .content {
    max-width: 1200px;
    margin: auto;
    height: 100%;

    display: flex;
    align-items: center;

    .text-section {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 3rem;
      width: 100%;

      .ranking {
        display: flex;
        align-items: center;
        gap: 1.6rem;
      }

      > p {
        width: 52rem;
      }
    }

    .img-section {
      flex: 1;
      img {
        width: clamp(48rem, 42vw, 42vw);
        position: absolute;
        transform: translateY(-50%);
        right: 0;
      }
    }

    .form-container {
      display: flex;
      gap: 1rem;

      input {
        background-color: #fff;
        padding: 1.6rem 1.4rem;
        box-shadow: 0 16px 24px 0 rgba(104, 104, 104, 0.16);
        border-radius: 1rem;
        border: 1px solid rgba(104, 104, 104, 0.16);
      }
    }

    .bg-items {
      display: grid;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100vw;
      height: 100vh;
      grid-template-columns: 1fr 1fr 1fr 1fr;

      .bg:nth-child(1) {
        background-color: rgb(0, 133, 255, 0.05);
      }

      .bg:nth-child(2) {
        background-color: rgb(0, 133, 255, 0.07);
      }

      .bg:nth-child(3) {
        background-color: rgb(0, 133, 255, 0.09);
      }

      .bg:nth-child(4) {
        background-color: rgb(0, 133, 255, 0.11);
      }
    }
  }

  @media (max-width: 992px) {
    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: initial;
    }

    height: fit-content; // ***

    .content {
      padding: 0 2rem;
      flex-direction: column;
      width: 100%;
      height: fit-content; // ***
      gap: 4rem;

      .text-section {
        .ranking {
          gap: 1.2rem;
          margin-top: 4rem;

          img {
            width: 9rem;
          }

          p {
            font-size: 1.4rem;
          }
        }

        > p {
          width: auto;
        }

        .form-container {
          flex-direction: column;
          width: 100%;
          max-width: 65rem;
          margin: auto;

          button {
            text-align: center;
          }
        }
      }

      .img-section {
        img {
          position: initial;
          transform: translateY(0%);
          width: 100%;
        }
      }
    }
  }
`;
