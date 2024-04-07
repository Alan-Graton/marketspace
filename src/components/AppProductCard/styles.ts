import styled, { css } from "styled-components/native";

interface ProductVisibilityStatus {
  is_active: boolean;
}

interface BadgeStyleProps {
  status: boolean;
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

export const OverlayContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: ${({ theme }) => theme.COLORS.IMAGE_OVERLAY};

  align-items: flex-start;
`;

export const OverlayTitle = styled.Text`
  position: absolute;

  bottom: 5px;
  left: 10px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: 11px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `};
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
    background-color: ${status
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

export const Product = styled.Text<ProductVisibilityStatus>`
  ${({ theme, is_active }) => css`
    font-size: ${theme.FONT_SIZE.sm}px;
    font-family: ${theme.FONT_FAMILY.BODY};

    color: ${is_active ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_400};
  `}
`;

export const Price = styled.Text<ProductVisibilityStatus>`
  ${({ theme, is_active }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.HEADING};

    color: ${is_active ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_400};
  `}
`;
