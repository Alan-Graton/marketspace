import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  padding: 10px;

  height: 220px;

  align-items: center;
  justify-content: center;

  border-radius: 6px;

  gap: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.HEADING};
    font-size: ${theme.FONT_SIZE.sm}px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.BODY};
    font-size: ${theme.FONT_SIZE.xls}px;
  `}
`;
