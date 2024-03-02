import { View } from "react-native";

import * as S from "./styles";

export function AnnouncementsCounter() {
  return (
    <S.Container>
      <S.Title>Seus produtos anunciados para venda</S.Title>
      <S.Card>
        <S.LeftContentContainer>
          <S.TagIcon />
          <View>
            <S.Counter>4</S.Counter>
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
