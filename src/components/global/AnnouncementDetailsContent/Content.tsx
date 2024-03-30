import React from "react";

import { View, Text } from "react-native";

import { AppStatusBadge } from "@/components/AppStatusBadge";

import { ProductsDTO } from "@/dtos/Products.dto";

import {
  Bank,
  Barcode,
  QrCode,
  Money,
  CreditCard,
  ArrowRight,
} from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";
import { PaymentMethods } from "@/@types";
import { FlatList } from "react-native";

interface Props {
  children?: React.JSX.Element;
  product: ProductsDTO;
}

export function Content({ children, product }: Props) {
  const { COLORS } = useTheme();

  const paymentMethodIcons = {
    boleto: { Icon: Barcode, title: "Boleto" },
    pix: { Icon: QrCode, title: "Pix" },
    cash: { Icon: Money, title: "Dinheiro" },
    card: { Icon: CreditCard, title: "Cartão de Crédito" },
    deposit: { Icon: Bank, title: "Depósito Bancário" },
  };

  function handlePaymentMethodIcon(paymentMethod: PaymentMethods) {
    const { Icon, title } = paymentMethodIcons[paymentMethod];
    return (
      <>
        <Icon size={18} color={COLORS.GRAY_100} />
        <S.PaymentMethodTitle>{title}</S.PaymentMethodTitle>
      </>
    );
  }

  return (
    <>
      <S.Content>
        <S.Header>
          <FlatList
            data={product.images}
            keyExtractor={(item) => item.uri}
            horizontal
            renderItem={({ item }) => (
              <S.AnnouncementImg
                source={{ uri: item.uri }}
                style={{
                  width: 375,
                  height: "100%",
                }}
                resizeMode="stretch"
              />
            )}
            contentContainerStyle={{
              gap: 5,
            }}
            pagingEnabled
          />
          <View
            style={{
              position: "absolute",
              right: 10,
              top: 135,
              backgroundColor: COLORS.GRAY_400,
              width: 30,
              height: 30,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowRight size={20} color="white" />
          </View>
        </S.Header>
        <S.Body>
          <S.AuthorSection>
            <S.AuthorAvatar source={require("@/assets/defaultAvatar.png")} />
            <S.AuthorName>Alan Graton</S.AuthorName>
          </S.AuthorSection>
          <S.ProductDetailsSection>
            <AppStatusBadge
              status={product.is_new}
              style={{
                maxWidth: 70,
              }}
            />
            <View style={{ gap: 8 }}>
              <S.ProductPriceNameWrapper>
                <S.ProductName>{product.name}</S.ProductName>
                <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                  <S.DollarSign>R$</S.DollarSign>
                  <S.ProductPrice>
                    {String(product.price).split("R$")[1]}
                  </S.ProductPrice>
                </View>
              </S.ProductPriceNameWrapper>
              <Text style={{ color: COLORS.GRAY_200 }}>
                {product.description}
              </Text>
            </View>
          </S.ProductDetailsSection>
          <S.ProductHasTradeSection>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <S.ProductHasTradeTitle>Aceita troca?</S.ProductHasTradeTitle>
              <S.HasTrade>{product.accept_trade ? "Sim" : "Não"}</S.HasTrade>
            </View>
          </S.ProductHasTradeSection>
          <S.PaymentMethodSectionTitle>
            Meio de pagamento:
          </S.PaymentMethodSectionTitle>
          {product.payment_methods.map((paymentMethod) => (
            <S.PaymentMethodOption key={paymentMethod}>
              {handlePaymentMethodIcon(paymentMethod)}
            </S.PaymentMethodOption>
          ))}
        </S.Body>
        <>{children}</>
      </S.Content>
    </>
  );
}
