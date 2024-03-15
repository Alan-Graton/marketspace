import React from "react";

import { Text, View } from "react-native";

import { CheckBox } from "@rneui/themed";
import { Switch } from "@rneui/themed";

import { AppStatusBadge } from "@/components/AppStatusBadge";

import { useTheme } from "styled-components/native";
import { AppIconButton } from "@/components/AppIconButton";

export function BottomSheetBody() {
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();

  return (
    <View>
      <View style={{ marginBottom: 24, gap: 12 }}>
        <Text
          style={{
            color: COLORS.RAY_200,
            fontFamily: FONT_FAMILY.HEADING,
            fontSize: FONT_SIZE.sm,
          }}
        >
          Condição
        </Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <AppIconButton>
            <AppStatusBadge
              status="NOVO"
              style={{
                width: 76,
                height: 35,
                justifyContent: "center",
              }}
              hasIcon
            />
          </AppIconButton>
          <AppIconButton>
            <AppStatusBadge
              status="USADO"
              style={{
                width: 76,
                height: 35,
                justifyContent: "center",
              }}
              hasIcon
            />
          </AppIconButton>
        </View>
      </View>
      <View style={{ flexDirection: "column", marginBottom: 24, gap: 12 }}>
        <Text
          style={{
            color: COLORS.RAY_200,
            fontFamily: FONT_FAMILY.HEADING,
            fontSize: FONT_SIZE.sm,
          }}
        >
          Aceita troca?
        </Text>
        <Switch
          style={{
            alignSelf: "flex-start",
          }}
          color={COLORS.BLUE_LIGHT}
        />
      </View>
      <View style={{ gap: 12 }}>
        <Text
          style={{
            color: COLORS.RAY_200,
            fontFamily: FONT_FAMILY.HEADING,
            fontSize: FONT_SIZE.sm,
          }}
        >
          Meios de pagamento aceitos
        </Text>
        <View style={{ gap: 8 }}>
          <CheckBox
            title="Boleto"
            size={18}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            containerStyle={{
              backgroundColor: "transparent",
              margin: 0,
              marginLeft: 0,
              padding: 0,
            }}
            checkedColor={COLORS.BLUE_LIGHT}
            titleProps={{
              style: {
                fontFamily: FONT_FAMILY.BODY,
                fontSize: FONT_SIZE.md,
                color: COLORS.GRAY_200,
              },
            }}
            checked
          />
          <CheckBox
            title="Pix"
            size={18}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            containerStyle={{
              backgroundColor: "transparent",
              margin: 0,
              marginLeft: 0,
              padding: 0,
            }}
            checkedColor={COLORS.BLUE_LIGHT}
            titleProps={{
              style: {
                fontFamily: FONT_FAMILY.BODY,
                fontSize: FONT_SIZE.md,
                color: COLORS.GRAY_200,
              },
            }}
            checked
          />
          <CheckBox
            title="Dinheiro"
            size={18}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            containerStyle={{
              backgroundColor: "transparent",
              margin: 0,
              marginLeft: 0,
              padding: 0,
            }}
            checkedColor={COLORS.BLUE_LIGHT}
            titleProps={{
              style: {
                fontFamily: FONT_FAMILY.BODY,
                fontSize: FONT_SIZE.md,
                color: COLORS.GRAY_200,
              },
            }}
            checked
          />
          <CheckBox
            title="Cartão de Crédito"
            size={18}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            containerStyle={{
              backgroundColor: "transparent",
              margin: 0,
              marginLeft: 0,
              padding: 0,
            }}
            checkedColor={COLORS.BLUE_LIGHT}
            titleProps={{
              style: {
                fontFamily: FONT_FAMILY.BODY,
                fontSize: FONT_SIZE.md,
                color: COLORS.GRAY_200,
              },
            }}
            checked
          />
          <CheckBox
            title="Depósito Bancário"
            size={18}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            containerStyle={{
              backgroundColor: "transparent",
              margin: 0,
              marginLeft: 0,
              padding: 0,
            }}
            checkedColor={COLORS.BLUE_LIGHT}
            titleProps={{
              style: {
                fontFamily: FONT_FAMILY.BODY,
                fontSize: FONT_SIZE.md,
                color: COLORS.GRAY_200,
              },
            }}
            checked
          />
        </View>
      </View>
    </View>
  );
}
