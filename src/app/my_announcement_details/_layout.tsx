import React from "react";

import { Stack } from "expo-router";

import { AnnouncementDetailsHeaderLeft } from "./components/HeaderLeft";
import { AnnouncementDetailsHeaderRight } from "./components/HeaderRight";

import { useTheme } from "styled-components/native";

export default function MyAnnouncementDetailsLayout() {
  const { COLORS } = useTheme();

  return (
    <>
      <Stack
        initialRouteName="home"
        screenOptions={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.GRAY_600,
          },
          headerLeft: () => <AnnouncementDetailsHeaderLeft />,
          headerRight: () => <AnnouncementDetailsHeaderRight />,
        }}
      />
    </>
  );
}
