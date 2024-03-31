import { View } from "react-native";

import { router } from "expo-router";

import * as S from "./styles";

interface Props {
  counter: number;
}

export function AnnouncementsCounter({ counter }: Props) {
  return (
    <S.Container>
      <S.Title>Seus produtos anunciados para venda</S.Title>
      <S.Card onPress={() => router.push("/(tabs)/announcements")}>
        <S.LeftContentContainer>
          <S.TagIcon />
          <View>
            <S.Counter>{counter}</S.Counter>
            <S.GrayLabel>anúncios ativos</S.GrayLabel>
          </View>
        </S.LeftContentContainer>
        <S.RightContentContainer>
          <S.BlueLabel>Meus anúncios</S.BlueLabel>
          <S.ArrowRightIcon />
        </S.RightContentContainer>
      </S.Card>
    </S.Container>
  );
}
