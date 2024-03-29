import React from "react";

import { View, Text } from "react-native";

import { AppStatusBadge } from "@/components/AppStatusBadge";

import { Bank, Barcode, QrCode } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

interface Props {
  announcement: any; // Use DTO type in here
}

export function Content() {
  const { COLORS } = useTheme();

  return (
    <>
      <S.Content>
        <S.Header>
          <S.AnnouncementImg
            source={require("@/assets/product1.png")}
            resizeMode="stretch"
          />
        </S.Header>
        <S.Body>
          <S.AuthorSection>
            <S.AuthorAvatar source={require("@/assets/defaultAvatar.png")} />
            <S.AuthorName>Alan Graton</S.AuthorName>
          </S.AuthorSection>
          <S.ProductDetailsSection>
            <AppStatusBadge
              // status={announcementDetails?.status}
              status={"NOVO"} // For testing only
              style={{
                maxWidth: 70,
              }}
            />
            <View style={{ gap: 8 }}>
              <S.ProductPriceNameWrapper>
                <S.ProductName>Tênis vermelho</S.ProductName>
                <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                  <S.DollarSign>R$</S.DollarSign>
                  <S.ProductPrice>69,00</S.ProductPrice>
                </View>
              </S.ProductPriceNameWrapper>
              <Text style={{ color: COLORS.GRAY_200 }}>
                O Tênis Redley Originals Summer em vermelho é uma escolha
                perfeita para quem busca versatilidade e estilo no dia a dia.
              </Text>
            </View>
          </S.ProductDetailsSection>
          <S.ProductHasTradeSection>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <S.ProductHasTradeTitle>Aceita troca?</S.ProductHasTradeTitle>
              <S.HasTrade>Não</S.HasTrade>
            </View>
          </S.ProductHasTradeSection>
          <S.PaymentMethodSectionTitle>
            Meio de pagamento:
          </S.PaymentMethodSectionTitle>
          <S.PaymentMethodOption>
            <Barcode size={18} color={COLORS.GRAY_100} />
            <S.PaymentMethodTitle>Boleto</S.PaymentMethodTitle>
          </S.PaymentMethodOption>
          <S.PaymentMethodOption>
            <QrCode size={18} color={COLORS.GRAY_100} />
            <S.PaymentMethodTitle>Pix</S.PaymentMethodTitle>
          </S.PaymentMethodOption>
          <S.PaymentMethodOption>
            <Bank size={18} color={COLORS.GRAY_100} />
            <S.PaymentMethodTitle>Depósito Bancário</S.PaymentMethodTitle>
          </S.PaymentMethodOption>
        </S.Body>
      </S.Content>
    </>
  );
}
