import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  padding: 10px;
`;

export const DollarSign = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE};
    font-size: ${theme.FONT_SIZE.sm}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;

export const ProductPrice = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE};
    font-size: ${theme.FONT_SIZE.xlg}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;
