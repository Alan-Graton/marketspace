import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Content = styled.View``;

export const Header = styled.View`
  height: 280px;
`;

export const NextItemIndicator = styled.View`
  position: absolute;

  right: 10px;
  top: 135px;

  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  border-radius: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const AnnouncementImg = styled.ImageBackground.attrs(({}) => ({
  resizeMode: "stretch",
}))`
  width: 375px;
  height: 100%;
`;

export const Body = styled.View`
  padding: 16px;
`;

export const ImgOverlayContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.IMAGE_OVERLAY};

  align-items: center;
  justify-content: center;
`;

export const ImgOverlayTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.sm}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;

export const AuthorSection = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const AuthorAvatar = styled.Image`
  width: 24px;
  height: 24px;

  border-radius: 50px;
`;

export const AuthorName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const ProductDetailsSection = styled.View`
  margin-top: 25px;
  gap: 8px;
`;

export const ProductPriceNameWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.lg}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;

export const DollarSign = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
    color: ${theme.COLORS.BLUE_LIGHT};
  `}
`;

export const ProductPrice = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.lg}px;
    font-family: ${theme.FONT_FAMILY.HEADING};
    color: ${theme.COLORS.BLUE_LIGHT};
  `}
`;

export const ProductHasTradeSection = styled.View`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const ProductHasTradeTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.HEADING};
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const HasTrade = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const PaymentMethodSectionTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.HEADING};
    color: ${theme.COLORS.GRAY_200};
  `}

  margin-bottom: 8px,
`;

export const PaymentMethodOption = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-bottom: 4px;
`;

export const PaymentMethodTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Footer = styled.View`
  gap: 10px;
  padding: 16px;
`;
