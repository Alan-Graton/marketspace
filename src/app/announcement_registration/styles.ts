import styled, { css } from "styled-components/native";

import { AppIconButton } from "@/components/AppIconButton";

import { CheckBox } from "@rneui/base";

import CurrencyInput from "react-native-currency-input";

export const Container = styled.ScrollView.attrs(({}) => ({
  contentContainerStyle: {
    padding: 16,
  },
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.HEADING};
    font-size: ${theme.FONT_SIZE.md}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const SectionSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BODY};
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.GRAY_300};
  `}
`;

export const ProductImageSection = styled.View`
  gap: 16px;
  margin-bottom: 32px;
`;

export const ProductImageSelector = styled(AppIconButton)`
  width: 100px;
  height: 100px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  align-items: center;
  justify-content: center;

  border-radius: 6px;
`;

export const ProductDetailsSection = styled.View``;

export const ProductStatusRadioButton = styled(CheckBox).attrs(({ theme }) => ({
  size: 18,
  checkedIcon: "dot-circle-o",
  uncheckedIcon: "circle-o",
  containerStyle: {
    backgroundColor: "transparent",
    margin: 0,
    marginLeft: 0,
    padding: 0,
  },
  checkedIconStyle: theme.COLORS.BLUE_LIGHT,
  titleProps: {
    style: {
      fontFamily: theme.FONT_FAMILY.BODY,
      fontSize: theme.FONT_SIZE.md,
      color: theme.COLORS.GRAY_200,
    },
  },
}))``;

export const PaymentMethodsCheckBox = styled(CheckBox).attrs(({ theme }) => ({
  size: 18,
  iconType: "material-community",
  checkedIcon: "checkbox-marked",
  uncheckedIcon: "checkbox-blank-outline",
  containerStyle: {
    backgroundColor: "transparent",
    margin: 0,
    marginLeft: 0,
    padding: 0,
  },
  checkedIconStyle: theme.COLORS.BLUE_LIGHT,
  titleProps: {
    style: {
      fontFamily: theme.FONT_FAMILY.BODY,
      fontSize: theme.FONT_SIZE.md,
      color: theme.COLORS.GRAY_200,
    },
  },
}))``;

export const AboutSection = styled.View`
  gap: 16px;
`;

export const SaleSection = styled.View`
  gap: 16px;
`;

export const ProductPrice = styled(CurrencyInput).attrs(({ theme }) => ({
  minValue: 0,
  prefix: "R$",
  delimiter: ".",
  separator: ",",
  precision: 2,
}))``;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  padding: 16px;
  gap: 12px;
`;
