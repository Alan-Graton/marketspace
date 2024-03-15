import React from "react";

import { Text, View } from "react-native";

import { AppIconButton } from "@/components/AppIconButton";

import { X } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

interface IProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BottomSheetHeader({ setIsVisible }: IProps) {
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontFamily: FONT_FAMILY.HEADING,
          fontSize: FONT_SIZE.lg,
          color: COLORS.GRAY_100,
        }}
      >
        Filtrar anúncios
      </Text>
      <AppIconButton onPress={() => setIsVisible(false)}>
        <X size={24} />
      </AppIconButton>
    </View>
  );
}
