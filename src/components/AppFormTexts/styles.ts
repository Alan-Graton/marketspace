import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const ErrorMessage = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_LIGHT};
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;

export const HelpMessage = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;
