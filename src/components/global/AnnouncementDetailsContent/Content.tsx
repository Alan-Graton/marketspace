import React from "react";

import { View, Text, FlatList } from "react-native";

import { useAuthContext } from "@/hooks/useAuthContext.hook";

import { AppStatusBadge } from "@/components/AppStatusBadge";

import { handleUserAvatar } from "@/utils/handleUserAvatar.util";

import { api } from "@/service/api";

import { PaymentMethods } from "@/@types";
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

interface Props {
  children?: React.JSX.Element;
  product: ProductsDTO;
}

export function Content({ children, product }: Props) {
  const { COLORS } = useTheme();

  const { user } = useAuthContext();

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
            data={product.product_images}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <>
                <S.AnnouncementImg
                  source={{
                    uri: `${api.defaults.baseURL}/images/${item.path}`,
                  }}
                >
                  {!product.is_active && (
                    <S.ImgOverlayContainer>
                      <S.ImgOverlayTitle>ANÚNCIO DESATIVADO</S.ImgOverlayTitle>
                    </S.ImgOverlayContainer>
                  )}
                </S.AnnouncementImg>
              </>
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            contentContainerStyle={{
              gap: 5,
            }}
          />
          <S.NextItemIndicator>
            <ArrowRight size={20} color="white" />
          </S.NextItemIndicator>
        </S.Header>
        <S.Body>
          <S.AuthorSection>
            <S.AuthorAvatar source={handleUserAvatar(user)} />
            <S.AuthorName>{user.name}</S.AuthorName>
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
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      signDisplay: "never",
                    }).format(Number(product.price))}
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
            <S.PaymentMethodOption key={paymentMethod.key}>
              {handlePaymentMethodIcon(paymentMethod.key)}
            </S.PaymentMethodOption>
          ))}
        </S.Body>
        <>{children}</>
      </S.Content>
    </>
  );
}
