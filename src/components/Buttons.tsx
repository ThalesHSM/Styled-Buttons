import { StyledButton } from "./StyledButtons";

interface IButton {
  children: any;
  icon?: any;
  disabled?: boolean;
  size?: "sm" | "lg";
  shouldShowShadow?: boolean;
  color?: "purple" | "green" | "orange";
}

const Button = ({
  children,
  icon,
  disabled,
  size,
  shouldShowShadow,
  color,
}: IButton) => {
  return (
    <StyledButton
      disabled={disabled}
      size={size}
      color={color}
      shouldShowShadow={shouldShowShadow}
    >
      {icon && icon} {children}
    </StyledButton>
  );
};

export default Button;
