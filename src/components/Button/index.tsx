import { ButtonContainer } from "./styles";

interface IButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: IButtonProps) {
  return <ButtonContainer>{children}</ButtonContainer>;
}
