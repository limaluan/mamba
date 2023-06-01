import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  background-color: var(--blue-500);
  color: #fff;
  padding: 1.4rem 3.2rem;
  border-radius: 0.8rem;
  font-size: 1.8rem;
  box-shadow: 0px 16px 24px rgba(0, 133, 255, 0.16);

  &:hover {
    background-color: rgb(0, 105, 240);
    transition: 150ms background-color;
    cursor: pointer;
  }
`;
