import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex-grow: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  flex-direction: row;
`;
