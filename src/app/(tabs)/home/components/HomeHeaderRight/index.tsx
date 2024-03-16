import { router } from "expo-router";

import { AppButton } from "@/components/AppButton";

import { Plus } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export function HomeHeaderRight() {
  const { COLORS } = useTheme();

  return (
    <S.Container>
      <AppButton
        title="Criar Anúncio"
        icon={<Plus size={16} color={COLORS.GRAY_600} />}
        type="ternary"
        style={{ flex: 1 }}
        onPress={() => router.push("/announcement_registration/")}
      />
    </S.Container>
  );
}
