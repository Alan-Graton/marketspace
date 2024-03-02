import { SafeAreaView } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Content = styled.View`
  flex: 1;

  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
`;
export const Body = styled.View``;

export const ProductCardContainer = styled.View`
  flex: 1;
  align-items: center;

  padding: 10px;
  gap: 10px;
`;
