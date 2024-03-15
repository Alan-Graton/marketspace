import React from "react";

import { View } from "react-native";

import { Switch } from "@rneui/themed";

import { AppIconButton } from "@/components/AppIconButton";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export function BottomSheetBody() {
  const { COLORS } = useTheme();

  return (
    <>
      <S.ProductConditionSection>
        <S.SectionTitle>Condição</S.SectionTitle>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <AppIconButton>
            <S.ProductStatusBadge status="NOVO" hasIcon />
          </AppIconButton>
          <AppIconButton>
            <S.ProductStatusBadge status="USADO" hasIcon />
          </AppIconButton>
        </View>
      </S.ProductConditionSection>
      <S.HasProductTradeSection>
        <S.SectionTitle>Aceita troca?</S.SectionTitle>
        <Switch
          style={{
            alignSelf: "flex-start",
          }}
          color={COLORS.BLUE_LIGHT}
        />
      </S.HasProductTradeSection>
      <S.ProductPaymentTypeSection>
        <S.SectionTitle>Meios de pagamento aceitos</S.SectionTitle>
        <View style={{ gap: 8 }}>
          <S.PaymentTypeCheckBox title="Boleto" checked />
          <S.PaymentTypeCheckBox title="Pix" checked />
          <S.PaymentTypeCheckBox title="Dinheiro" checked />
          <S.PaymentTypeCheckBox title="Cartão de Crédito" checked />
          <S.PaymentTypeCheckBox title="Depósito Bancário" checked />
        </View>
      </S.ProductPaymentTypeSection>
    </>
  );
}
