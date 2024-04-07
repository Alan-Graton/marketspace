import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  gap: 12px;

  padding-right: 24px;
  padding-left: 24px;
  padding-top: 20px;
  padding-bottom: 28px;
`;
