import React from "react";

import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

import { THEME } from "@/theme";

interface IProps extends ActivityIndicatorProps {
  loading: boolean;
  color?: string;
}

export function AppLoader({
  loading,
  color = THEME.COLORS.GRAY_600,
  ...rest
}: IProps) {
  return (
    <>
      {loading && (
        <ActivityIndicator animating={loading} color={color} {...rest} />
      )}
    </>
  );
}
