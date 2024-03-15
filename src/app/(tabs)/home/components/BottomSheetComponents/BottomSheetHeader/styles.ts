import styled, { css } from "styled-components/native";

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.HEADING};
    font-size: ${theme.FONT_SIZE.lg};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
