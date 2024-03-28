import { TouchableOpacityProps } from "react-native";

import { ComponentStyleType } from "@/@types";

import { AppLoader } from "../AppLoader";

import * as S from "./styles";

interface IProps extends TouchableOpacityProps {
  title: string;
  variant?: ""; // creates variants
  type?: ComponentStyleType;
  icon?: React.JSX.Element;
  loading?: boolean;
}

export function AppButton({
  title,
  variant,
  type = "primary",
  icon,
  loading = false,
  ...rest
}: IProps) {
  return (
    <S.Container
      variant={variant}
      type={type}
      icon={icon}
      loading={loading}
      {...rest}
    >
      {icon && icon}
      <S.Title variant={variant} type={type} loading={loading}>
        {title}
      </S.Title>
      {loading && <AppLoader loading={loading} />}
    </S.Container>
  );
}
