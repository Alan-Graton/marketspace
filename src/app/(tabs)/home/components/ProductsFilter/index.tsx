import React from "react";

import { View } from "react-native";

import { AppInput } from "@/components/AppInput";

import { MagnifyingGlass, Sliders } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

interface IProps {
  bottomSheetVisible: boolean;
  setBottomSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ProductsFilter({
  bottomSheetVisible,
  setBottomSheetVisible,
}: IProps) {
  const { COLORS } = useTheme();

  return (
    <S.Container>
      <S.Title>Compre produtos variados</S.Title>
      <View style={{ flexDirection: "row" }}>
        <AppInput placeholder="Buscar anúncio" />
        <S.IconsContainer>
          <S.SearchIconButton>
            <MagnifyingGlass size={24} />
          </S.SearchIconButton>
          <View style={{ backgroundColor: COLORS.GRAY_400, width: 1 }}></View>
          <S.FilterIconButton
            onPress={() => setBottomSheetVisible(!bottomSheetVisible)}
          >
            <Sliders size={24} />
          </S.FilterIconButton>
        </S.IconsContainer>
      </View>
    </S.Container>
  );
}
