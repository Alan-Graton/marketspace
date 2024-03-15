import styled, { css } from "styled-components/native";

interface BadgeStyleProps {
  status: "NOVO" | "USADO";
}

export const Container = styled.View`
  flex: 1;
  align-items: center;

  padding: 10px;
  gap: 10px;
`;

export const Card = styled.TouchableOpacity`
  width: 160px;
  height: 155px;

  border-radius: 6px;

  overflow: hidden;
`;

export const ProductImg = styled.ImageBackground`
  flex: 1;

  border-radius: 6px;

  overflow: hidden;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 5px;
`;

export const Avatar = styled.Image`
  width: 23px;
  height: 24px;
`;

export const StatusBadge = styled.View<BadgeStyleProps>`
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

export const StatusText = styled.Text`
  font-size: 10px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.HEADING};

    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Body = styled.View``;

export const Footer = styled.View`
  padding: 5px;
`;

export const Product = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm}px;
    font-family: ${theme.FONT_FAMILY.BODY};

    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.HEADING};

    color: ${theme.COLORS.GRAY_100};
  `}
`;
