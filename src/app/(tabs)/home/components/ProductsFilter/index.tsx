import { View } from "react-native";

import { AppInput } from "@/components/AppInput";

import { MagnifyingGlass, Sliders } from "phosphor-react-native";

import * as S from "./styles";

export function ProductsFilter() {
  return (
    <S.Container>
      <S.Title>Compre produtos variados</S.Title>
      <View style={{ flexDirection: "row" }}>
        <AppInput placeholder="Buscar anúncio" />
        <S.IconsContainer>
          <S.SearchIconButton>
            <MagnifyingGlass size={24} />
          </S.SearchIconButton>
          <S.FilterIconButton>
            <Sliders size={24} />
          </S.FilterIconButton>
        </S.IconsContainer>
      </View>
    </S.Container>
  );
}
