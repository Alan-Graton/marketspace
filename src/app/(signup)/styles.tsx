import styled, { css } from "styled-components/native";

import { AppIconButton } from "@/components/AppIconButton";

import { SafeAreaView } from "react-native-safe-area-context";

export const Contanier = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  flex: 1;
`;

export const PasswordIconButton = styled(AppIconButton)`
  position: absolute;
  right: 5%;
  top: 30%;
`;

export const AvatarIconButton = styled(AppIconButton)`
  position: absolute;
  bottom: 0;
  right: 37%;

  background-color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};

  padding: 10px;
  border-radius: 50px;
`;

export const Content = styled.View`
  flex: 1;

  gap: 30px;

  padding: 16px;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Logo = styled.Image``;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font_family: ${theme.FONT_FAMILY.BODY};
  `}

  font-weight: bold;
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm}px;
    font_family: ${theme.FONT_FAMILY.BODY};
  `}

  text-align: center;
`;

export const Body = styled.View`
  gap: 15px;
`;
export const AvatarForm = styled.View`
  align-items: center;
`;

export const Footer = styled.View`
  gap: 15px;
`;
