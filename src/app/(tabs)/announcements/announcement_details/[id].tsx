import React from "react";

import { useGlobalSearchParams } from "expo-router";

import { Text, View, ScrollView } from "react-native";

import { useAnnouncementContext } from "@/hooks/useAnnouncementContext";

import { AppButton } from "@/components/AppButton";
import { AppStatusBadge } from "@/components/AppStatusBadge";

import announcement from "@/assets/product1.png";
import avatar from "@/assets/defaultAvatar.png";

import {
  Power,
  TrashSimple,
  Barcode,
  QrCode,
  Bank,
} from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function AnnouncementDetails() {
  const { id } = useGlobalSearchParams<{ id: string }>();
  const { COLORS } = useTheme();

  const { selectedAnnouncement, setSelectedAnnouncement } =
    useAnnouncementContext();

  const [deactivateAnnouncement, setDeactivateAnnouncement] =
    React.useState(false);

  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Content>
          <S.Header>
            {/* TODO: Images lists */}
            {/* TODO: Should be a ImageBackground? */}
            {/* TODO: Quando o anúncio estiver desativado será necessário um overlay na img do produto */}
            <S.AnnouncementImg source={announcement} resizeMode="stretch" />
          </S.Header>
          <S.Body>
            <S.AuthorSection>
              <S.AuthorAvatar source={avatar} />
              <S.AuthorName>Alan Graton</S.AuthorName>
            </S.AuthorSection>
            <S.ProductDetailsSection>
              <AppStatusBadge
                status={selectedAnnouncement?.status}
                style={{
                  maxWidth: 70,
                }}
              />
              <View style={{ gap: 8 }}>
                <S.ProductPriceNameWrapper>
                  <S.ProductName>Tênis vermelho</S.ProductName>
                  <View
                    style={{ flexDirection: "row", alignItems: "baseline" }}
                  >
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
            {/* NOTE: Esses detalhes vão ser dinâmicos, já que o produto pode ou não ter uma dessas opções */}
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
          <S.Footer>
            {/*
              TODO: Vou precisar alterar a disposição dos botões do Footer,
              além de ter que deixar o Footer fixo.

              Posso cuidar dessas validações de 2 jeitos:
                1. Parâmetros de rota
                2. Context
              Preciso me decidir em como vou fazer isso...
            */}
            <AppButton
              title={
                deactivateAnnouncement ? "Ativar anúncio" : "Desativar anúncio"
              }
              type={deactivateAnnouncement ? "primary" : "ternary"}
              icon={<Power size={18} color={COLORS.GRAY_700} />}
              onPress={() => setDeactivateAnnouncement(!deactivateAnnouncement)}
            />
            <AppButton
              title="Excluir anúncio"
              type="secondary"
              icon={<TrashSimple size={18} color={COLORS.GRAY_200} />}
            />
          </S.Footer>
        </S.Content>
      </ScrollView>
    </S.Container>
  );
}
