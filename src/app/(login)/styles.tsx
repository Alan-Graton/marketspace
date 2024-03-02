import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

import { AppIconButton } from "@/components/AppIconButton";

export const Contanier = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  flex: 1;
`;

export const PasswordIconButton = styled(AppIconButton)`
  position: absolute;
  right: 5%;
  top: 30%;
`;

export const Content = styled.View`
  flex: 1;

  padding: 16px;
`;

export const Header = styled.View`
  align-items: center;

  margin-bottom: 20%;
`;

export const Logo = styled.Image``;
export const Title = styled.Text`
  font-weight: bold;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.HEADING};
    font-size: ${theme.FONT_SIZE.xlg}px;
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BODY};
    font-size: ${theme.FONT_SIZE.sm}px;
  `}
  text-align: center;
`;

export const Body = styled.View`
  gap: 15px;

  margin-bottom: 45%;
`;

export const Footer = styled.View`
  gap: 15px;
`;
