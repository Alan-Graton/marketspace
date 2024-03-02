import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};

    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BODY};
  `}

  width: 100%;
  height: 55px;

  padding: 10px;
  border-radius: 6px;
`;
