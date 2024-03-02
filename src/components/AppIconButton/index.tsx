import React from "react";
import { TouchableOpacityProps } from "react-native";

import { ComponentStyleType } from "@/@types";

import * as S from "./styles";

interface IProps extends TouchableOpacityProps {
  children: React.JSX.Element;
  variant?: string;
  type?: ComponentStyleType;
}

export function AppIconButton({
  children,
  variant,
  type = "primary",
  ...rest
}: IProps) {
  return (
    <S.Button variant={variant} type={type} {...rest}>
      {children}
    </S.Button>
  );
}
