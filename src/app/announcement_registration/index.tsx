import React from "react";

import { ScrollView, Text, View } from "react-native";

import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";

import { CheckBox } from "@rneui/base";
import { Switch } from "@rneui/themed";
import CurrencyInput from "react-native-currency-input";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export default function AnnouncementRegistration() {
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();

  const [value, setValue] = React.useState<number | null>(0);

  return (
    <>
      <ScrollView
        className="content"
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}
      >
        <View className="product-image-section">
          <Text>Imagens</Text>
          <Text>
            Escolha até 3 imagens para mostrar o quanto o seu produto é
            incrível!
          </Text>
        </View>
        <View className="product-details-section">
          <View>
            <View className="about-section">
              <Text>Sobre o produto</Text>
              <AppInput placeholder="Título do anúncio" />
              <AppInput
                placeholder="Descrição do produto"
                multiline
                numberOfLines={10}
                style={{ height: 160, textAlignVertical: "top" }}
              />
              <CheckBox
                title="Produto novo"
                checked={false}
                size={18}
                // iconType="material-community"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                containerStyle={{
                  backgroundColor: "transparent",
                  margin: 0,
                  padding: 0,
                  marginLeft: 0,
                }}
                titleProps={{
                  style: {},
                }}
              />
              <CheckBox
                title="Produto usado"
                checked={false}
                size={18}
                // iconType="material-community"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                containerStyle={{
                  backgroundColor: "transparent",
                  margin: 0,
                  padding: 0,
                  marginLeft: 0,
                }}
                titleProps={{
                  style: {},
                }}
              />
            </View>
            <View className="sale-section">
              <Text>Venda</Text>
              <CurrencyInput
                value={value}
                minValue={0}
                onChangeValue={setValue}
                renderTextInput={(textInputProps) => (
                  <AppInput
                    placeholder="Valor do produto"
                    {...textInputProps}
                  />
                )}
                prefix="R$"
                delimiter="."
                separator=","
                precision={2}
              />
              <Text>Aceita troca?</Text>

              <Switch
                style={{
                  alignSelf: "flex-start",
                }}
                color={COLORS.BLUE_LIGHT}
              />
              <Text>Meios de pagamento aceitos</Text>
              <CheckBox
                title="Boleto"
                checked={false}
                size={18}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                containerStyle={{
                  backgroundColor: "transparent",
                  margin: 0,
                  padding: 0,
                  marginLeft: 0,
                }}
                titleProps={{
                  style: {},
                }}
              />
              <CheckBox
                title="Pix"
                checked={false}
                size={18}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                containerStyle={{
                  backgroundColor: "transparent",
                  margin: 0,
                  padding: 0,
                  marginLeft: 0,
                }}
                titleProps={{
                  style: {},
                }}
              />
              <CheckBox
                title="Dinheiro"
                checked={false}
                size={18}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                containerStyle={{
                  backgroundColor: "transparent",
                  margin: 0,
                  padding: 0,
                  marginLeft: 0,
                }}
                titleProps={{
                  style: {},
                }}
              />
              <CheckBox
                title="Cartão de Crédito"
                checked={false}
                size={18}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                containerStyle={{
                  backgroundColor: "transparent",
                  margin: 0,
                  padding: 0,
                  marginLeft: 0,
                }}
                titleProps={{
                  style: {},
                }}
              />
              <CheckBox
                title="Depósito Bancário"
                checked={false}
                size={18}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                containerStyle={{
                  backgroundColor: "transparent",
                  margin: 0,
                  padding: 0,
                  marginLeft: 0,
                }}
                titleProps={{
                  style: {},
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        className="footer"
        style={{
          padding: 16,
          backgroundColor: COLORS.GRAY_700,
          flexDirection: "row",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <AppButton title="Cancelar" style={{ flex: 1 }} />
        <AppButton title="Avançar" style={{ flex: 1 }} />
      </View>
    </>
  );
}
