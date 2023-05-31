import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  background-color: var(--blue-500);
  color: #fff;
  padding: 1.4rem 3.2rem;
  border-radius: 1rem;
  font-size: 1.8rem;

  &:hover {
    background-color: rgb(0, 105, 240);
    transition: 150ms background-color;
    cursor: pointer;
  }
`;
