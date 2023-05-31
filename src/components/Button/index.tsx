import { ButtonContainer } from "./styles";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className }: IButtonProps) {
  return <ButtonContainer className={className}>{children}</ButtonContainer>;
}
