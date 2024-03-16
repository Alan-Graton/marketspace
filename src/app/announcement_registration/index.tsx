import React from "react";

import { View } from "react-native";

import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";

import { Switch } from "@rneui/themed";

import { Plus } from "phosphor-react-native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export default function AnnouncementRegistration() {
  const { COLORS, FONT_SIZE } = useTheme();

  const [value, setValue] = React.useState<number | null>(0);

  return (
    <>
      <S.Container>
        <S.ProductImageSection>
          <View style={{ gap: 4 }}>
            <S.SectionTitle>Imagens</S.SectionTitle>
            <S.SectionSubtitle>
              Escolha até 3 imagens para mostrar o quanto o seu produto é
              incrível!
            </S.SectionSubtitle>
          </View>
          <S.ProductImageSelector>
            <Plus size={24} color={COLORS.GRAY_400} />
          </S.ProductImageSelector>
        </S.ProductImageSection>
        <S.ProductDetailsSection>
          <View style={{ gap: 32 }}>
            <S.AboutSection>
              <S.SectionTitle>Sobre o produto</S.SectionTitle>
              <AppInput placeholder="Título do anúncio" />
              <AppInput
                placeholder="Descrição do produto"
                multiline
                numberOfLines={10}
                style={{ height: 160, textAlignVertical: "top" }}
              />
              <View style={{ flexDirection: "row", gap: 20 }}>
                <S.ProductStatusRadioButton
                  title="Produto novo"
                  checked={false}
                />
                <S.ProductStatusRadioButton
                  title="Produto usado"
                  checked={false}
                />
              </View>
            </S.AboutSection>
            <S.SaleSection>
              <S.SectionTitle>Venda</S.SectionTitle>
              <S.ProductPrice
                value={value}
                onChangeValue={setValue}
                renderTextInput={(textInputProps) => (
                  <AppInput
                    placeholder="Valor do produto"
                    {...textInputProps}
                  />
                )}
              />
              <S.SectionTitle style={{ fontSize: FONT_SIZE.sm }}>
                Aceita troca?
              </S.SectionTitle>

              <Switch
                style={{
                  alignSelf: "flex-start",
                }}
                color={COLORS.BLUE_LIGHT}
              />
              <View style={{ gap: 12 }}>
                <View>
                  <S.SectionTitle style={{ fontSize: FONT_SIZE.sm }}>
                    Meios de pagamento aceitos
                  </S.SectionTitle>
                </View>
                <View style={{ gap: 8 }}>
                  <S.PaymentMethodsCheckBox title="Boleto" checked={false} />
                  <S.PaymentMethodsCheckBox title="Pix" checked={false} />
                  <S.PaymentMethodsCheckBox title="Dinheiro" checked={false} />
                  <S.PaymentMethodsCheckBox
                    title="Cartão de Crédito"
                    checked={false}
                  />
                  <S.PaymentMethodsCheckBox
                    title="Depósito Bancário"
                    checked={false}
                  />
                </View>
              </View>
            </S.SaleSection>
          </View>
        </S.ProductDetailsSection>
      </S.Container>
      <S.Footer>
        <AppButton title="Cancelar" style={{ flex: 1 }} type="secondary" />
        <AppButton title="Avançar" style={{ flex: 1 }} type="ternary" />
      </S.Footer>
    </>
  );
}
