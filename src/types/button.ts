type ButtonColor = {
  background: string;
  color: string;
  outline?: string;
};

type ButtonParam = {
  initial: ButtonColor;
  active: ButtonColor;
  hover: ButtonColor;
  disabled: ButtonColor;
};

type ButtonVariant = {
  primary: ButtonParam;
  secondary: ButtonParam;
  subtle: ButtonParam;
  text: ButtonParam;
  green: ButtonParam;
};

type ButtonOption = {
  padding: string;
  fontSize: string;
  outline: string;
  borderRadius: string;
  height: string;
};

type ButtonSize = {
  large: ButtonOption;
  medium: ButtonOption;
  small: ButtonOption;
};

type ButtonConfig = {
  variant: ButtonVariant;
  size: ButtonSize;
};

export default ButtonConfig;
