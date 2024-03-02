import styled, { css } from "styled-components/native";

import { AnnouncementStatus } from "@/@types";

interface StatusBadgeStyleProps {
  status: AnnouncementStatus;
}

export const Container = styled.View<StatusBadgeStyleProps>`
  ${({ theme, status }) => css`
    background-color: ${status === "NOVO"
      ? theme.COLORS.BLUE_LIGHT
      : theme.COLORS.GRAY_200};
  `}

  width: 55px;

  align-items: center;

  padding: 5px;
  border-radius: 50px;
`;

export const Title = styled.Text<StatusBadgeStyleProps>`
  font-size: 10px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.HEADING};

    color: ${theme.COLORS.GRAY_700};
  `}
`;
