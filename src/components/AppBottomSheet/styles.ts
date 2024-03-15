import styled, { css } from "styled-components/native";

export const Content = styled.ScrollView`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
  padding: 24px;
  padding-bottom: 32px;

  height: 580px;

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

export const Header = styled.View`
  margin-bottom: 24px;
`;
export const Body = styled.View``;
export const Footer = styled.View`
  margin-top: 64px;
  padding-bottom: 64px;
`;
