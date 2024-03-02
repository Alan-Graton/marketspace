import { TouchableOpacityProps } from "react-native";

import { ComponentStyleType } from "@/@types";

import * as S from "./styles";

interface IProps extends TouchableOpacityProps {
  title: string;
  variant?: ""; // creates variants
  type?: ComponentStyleType;
  icon?: React.JSX.Element;
}

export function AppButton({
  title,
  variant,
  type = "primary",
  icon,
  ...rest
}: IProps) {
  return (
    <S.Container variant={variant} type={type} icon={icon} {...rest}>
      {icon && icon}
      <S.Title variant={variant} type={type}>
        {title}
      </S.Title>
    </S.Container>
  );
}
