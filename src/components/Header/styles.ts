import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 8rem;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }

  .desktop-only {
    display: flex;
  }

  .mobile-only {
    display: none;
  }

  .menu {
    gap: 3.2rem;

    a {
      position: relative;

      &::after {
        content: "";
        background-color: var(--blue-500);
        position: absolute;
        width: 0%;
        height: 3px;
        left: 0;
        bottom: -0.5rem;
        border-radius: 9999rem;
        transition: width 200ms ease-out;
      }

      &:hover::after {
        width: 100%;
      }
    }

    .test {
      font-size: 72rem !important;
    }
  }

  @media (max-width: 992px) {
    .mobile-only {
      display: initial;
    }

    .desktop-only {
      display: none;
    }

    .header-content {
      padding: 0 1.4rem;
    }
  }
  
  @media (max-width: 1200px) {
    .header-content {
      padding: 0 2rem;
    }
  }
`;
