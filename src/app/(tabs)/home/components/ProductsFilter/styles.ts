import styled, { css } from "styled-components/native";

import { AppIconButton } from "@/components/AppIconButton";

export const Container = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.BODY};
  `}

  margin-bottom: 10px;
`;

export const IconsContainer = styled.View`
  position: absolute;
  top: 5px;
  right: 0px;

  flex-direction: row;
  justify-content: space-between;

  gap: 15px;

  padding: 10px;
`;

export const SearchIconButton = styled(AppIconButton)`
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_200};

  padding-right: 10px;
`;
export const FilterIconButton = styled(AppIconButton)``;
