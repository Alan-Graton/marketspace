import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  flex: 1;
`;

export const Content = styled.View`
  padding: 16px;

  gap: 10px;
`;

export const Header = styled.View`
  margin-bottom: 15px;
`;
export const Body = styled.View`
  gap: 15px;
`;

export const ProductCardContainer = styled.View`
  flex: 1;
  align-items: center;

  padding: 10px;
  gap: 10px;
`;

export const Footer = styled.View``;
