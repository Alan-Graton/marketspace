import styled, { css } from "styled-components/native";

import { ProductStatus } from "@/@types";

interface StatusBadgeStyleProps {
  status: ProductStatus;
  hasIcon?: Boolean;
}

export const Container = styled.View<StatusBadgeStyleProps>`
  ${({ theme, status }) => css`
    background-color: ${status === 1
      ? theme.COLORS.BLUE_LIGHT
      : theme.COLORS.GRAY_200};
  `}

  ${({ hasIcon }) =>
    hasIcon &&
    `
    flex-direction: row;
    align-items: center;
    gap: 6px;
  `}

  padding: 5px;

  width: 50px;
  height: 22px;

  align-items: center;

  border-radius: 50px;
`;

export const Title = styled.Text<StatusBadgeStyleProps>`
  font-size: ${({ theme, hasIcon }) =>
    hasIcon ? `${theme.FONT_SIZE.xls}px` : "10px"};

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.HEADING};

    color: ${theme.COLORS.GRAY_700};
  `}
`;
