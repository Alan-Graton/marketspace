import { Stack } from "expo-router";

import { useAnnouncementContext } from "@/hooks/useAnnouncementContext";

import { AnnouncementDetailsHeaderLeft } from "./components/HeaderLeft";
import { AnnouncementDetailsHeaderRight } from "./components/HeaderRight";

import { useTheme } from "styled-components/native";

export default function AnnouncementDetailsLayout() {
  const { COLORS } = useTheme();

  const { selectedAnnouncement } = useAnnouncementContext();

  return (
    <>
      <Stack
        initialRouteName="home"
        screenOptions={{
          title: "",
          headerShadowVisible: false,
          headerShown: selectedAnnouncement ? true : false,
          headerStyle: {
            backgroundColor: COLORS.GRAY_600,
            height: 100,
          },
          headerLeft: () => <AnnouncementDetailsHeaderLeft />,
          headerRight: () => <AnnouncementDetailsHeaderRight />,
        }}
      />
    </>
  );
}
