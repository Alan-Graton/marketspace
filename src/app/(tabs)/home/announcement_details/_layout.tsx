import React from "react";

import { Stack } from "expo-router";

import { AnnouncementDetailsHeaderLeft } from "./components/HeaderLeft";

import { useTheme } from "styled-components/native";

export default function AnnouncementDetailsLayout() {
  const { COLORS } = useTheme();

  return (
    <Stack
      screenOptions={{
        title: "",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.GRAY_600,
        },
        headerLeft: () => <AnnouncementDetailsHeaderLeft />,
      }}
    />
  );
}
