import styled, { css } from "styled-components/native";

import { AppStatusBadge } from "@/components/AppStatusBadge";

import { CheckBox } from "@rneui/base";

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.HEADING};
    font-size: ${theme.FONT_SIZE.sm};
  `}
`;

export const ProductConditionSection = styled.View`
  margin-bottom: 24px;
  gap: 12px;
`;

export const ProductStatusBadge = styled(AppStatusBadge)`
  width: 76px;
  height: 35px;
  justify-content: center;
`;

export const HasProductTradeSection = styled.View`
  flex-direction: column;
  margin-bottom: 24px;
  gap: 12px;
`;

export const ProductPaymentTypeSection = styled.View`
  gap: 12px;
`;

export const PaymentTypeCheckBox = styled(CheckBox).attrs(({ theme }) => ({
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
