import { TextInputProps } from "react-native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

interface IProps extends TextInputProps {}

export function AppInput({ ...rest }: IProps) {
  const { COLORS } = useTheme();

  return (
    <S.Input
      placeholderTextColor={COLORS.GRAY_400}
      cursorColor={COLORS.BLUE}
      {...rest}
    />
  );
}
