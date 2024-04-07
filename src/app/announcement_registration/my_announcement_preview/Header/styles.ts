import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  height: 121px;

  background-color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};

  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.HEADING};
    font-size: ${theme.FONT_SIZE.md}px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BODY};
    font-size: ${theme.FONT_SIZE.sm}px;
  `}
`;
