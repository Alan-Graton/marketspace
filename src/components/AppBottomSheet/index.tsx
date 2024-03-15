import React, { ReactNode } from "react";

import { BottomSheet, BottomSheetProps } from "@rneui/themed";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

interface IProps extends BottomSheetProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  bottomSheetContent?: ReactNode;
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}

export function AppBottomSheet({
  isVisible,
  setIsVisible,
  bottomSheetContent,
  header,
  body,
  footer,
  ...rest
}: IProps) {
  const { COLORS } = useTheme();

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible(false)}
      backdropStyle={{ backgroundColor: COLORS.BACKDROP }}
      {...rest}
    >
      <S.Content showsVerticalScrollIndicator={false}>
        <S.Header>{header}</S.Header>
        <S.Body>{body}</S.Body>
        <S.Footer>{footer}</S.Footer>
      </S.Content>
    </BottomSheet>
  );
}
