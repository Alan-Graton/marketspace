import React from "react";

import { View } from "react-native";

import { AppButton } from "@/components/AppButton";

export function BottomSheetFooter() {
  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      <AppButton title="Resetar filtros" type="secondary" style={{ flex: 1 }} />
      <AppButton title="Aplicar filtros" type="ternary" style={{ flex: 1 }} />
    </View>
  );
}
