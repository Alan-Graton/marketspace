import styled, { css } from "styled-components/native";

import { ComponentStyleType } from "@/@types";

interface IAppButtonStyleProps {
  variant?: string;
  type?: ComponentStyleType;
  icon?: React.JSX.Element;
}

export const Container = styled.TouchableOpacity<IAppButtonStyleProps>`
  background-color: ${({ theme, variant, type }) => {
    if (type === "primary") return theme.COLORS.BLUE_LIGHT;
    if (type === "secondary") return theme.COLORS.GRAY_500;
    if (type === "ternary") return theme.COLORS.GRAY_100;
  }};

  height: 55px;

  border-radius: 6px;

  flex-direction: row;

  align-items: center;
  justify-content: ${({ icon }) => {
    if (icon) return "center";

    return "center";
  }};

  gap: ${({ icon }) => {
    if (icon) return "10px";

    return 0;
  }};

  padding: 10px;
`;

export const Title = styled.Text<IAppButtonStyleProps>`
  font-weight: bold;

  ${({ theme, variant, type }) => css`
    color: ${type === "primary" || type === "ternary"
      ? theme.COLORS.GRAY_700
      : theme.COLORS.GRAY_200};

    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;
