import React, { ReactNode } from "react";

import { Text, View } from "react-native";

import { BottomSheet, BottomSheetProps } from "@rneui/themed";

import * as S from "./styles";

interface IProps extends BottomSheetProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  bottomSheetContent?: ReactNode;
}

export function AppBottomSheet({
  isVisible,
  setIsVisible,
  bottomSheetContent,
  ...rest
}: IProps) {
  return (
    <BottomSheet isVisible={isVisible} {...rest}>
      <S.Content>
        <S.Header></S.Header>
        {/* <S.Body>{bottomSheetContent}</S.Body> */}
        <S.Body></S.Body>
        <S.Footer>
          <View>
            <Text onPress={() => setIsVisible(false)}>I'm being rendered?</Text>
          </View>
        </S.Footer>
      </S.Content>
    </BottomSheet>
  );
}
