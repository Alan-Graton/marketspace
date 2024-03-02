import { SafeAreaView } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;

  flex: 1;
  padding: 10px;
  gap: 15px;
`;

export const Avatar = styled.Image`
  width: 35%;
  height: 100%;
`;

export const GreetingsContainer = styled.View`
  align-items: center;
  padding: 10px;
`;

export const Greetings = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;
export const Username = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;
