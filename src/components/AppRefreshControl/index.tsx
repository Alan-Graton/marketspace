import React from "react";

import { RefreshControl, RefreshControlProps } from "react-native";

import { useTheme } from "styled-components/native";

interface Props extends RefreshControlProps {}

export function AppRefreshControl({ ...rest }: Props) {
  const { COLORS } = useTheme();

  return <RefreshControl tintColor={COLORS.BLUE} {...rest} />;
}
