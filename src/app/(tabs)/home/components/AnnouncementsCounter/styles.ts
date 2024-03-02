import styled, { css } from "styled-components/native";

import { Tag, ArrowRight } from "phosphor-react-native";

export const Container = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.GRAY_300};
  `}
`;

export const Card = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BLUE_LIGHTER};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;

  margin-top: 10px;

  padding: 10px;
`;

export const LeftContentContainer = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 10px;
  gap: 15px;

  margin-left: 5px;
`;

export const RightContentContainer = styled.View`
  flex-direction: row;

  gap: 5px;

  margin-right: 5px;
`;

export const Counter = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    font-size: ${theme.FONT_SIZE.lg}px;
    font-weight: bold;
  `}
`;

export const GrayLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};

    font-size: ${theme.FONT_SIZE.xls}px;
    font-family: ${theme.FONT_FAMILY.BODY};
  `}
`;

export const BlueLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE};

    font-size: ${theme.FONT_SIZE.xls}px;
    font-weight: bold;
    font-family: ${theme.FONT_FAMILY.HEADING};
  `}
`;

export const TagIcon = styled(Tag).attrs(({ theme }) => ({
  color: theme.COLORS.BLUE,
}))``;
export const ArrowRightIcon = styled(ArrowRight).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.BLUE,
}))``;
