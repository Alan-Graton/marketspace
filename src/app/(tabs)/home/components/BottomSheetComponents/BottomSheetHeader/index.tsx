import React from "react";

import { AppIconButton } from "@/components/AppIconButton";

import { X } from "phosphor-react-native";

import * as S from "./styles";

interface IProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BottomSheetHeader({ setIsVisible }: IProps) {
  return (
    <S.Header>
      <S.Title>Filtrar anúncios</S.Title>
      <AppIconButton onPress={() => setIsVisible(false)}>
        <X size={24} />
      </AppIconButton>
    </S.Header>
  );
}
