import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Content = styled.View``;

export const Header = styled.View`
  background-color: red;

  height: 280px;
`;
export const AnnouncementImg = styled.Image`
  width: 100%;
  flex: 1;
`;

export const Body = styled.View`
  padding: 16px;
`;
export const Footer = styled.View`
  gap: 10px;
  padding: 16px;
`;
