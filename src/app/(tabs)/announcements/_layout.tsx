import React from "react";

import { Slot, Tabs } from "expo-router";

import { useAnnouncementContext } from "@/hooks/useAnnouncementContext";

import { AppIconButton } from "@/components/AppIconButton";

import { Plus } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

export default function AnnouncementsLayout() {
  const { COLORS, FONT_FAMILY } = useTheme();

  const { selectedAnnouncement } = useAnnouncementContext();

  console.log("selectedAnnouncement: ", selectedAnnouncement);

  return (
    <>
      <Tabs.Screen
        options={{
          headerShown: !selectedAnnouncement ? true : false,
          title: "Meus anúncios",
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          headerTitleStyle: {
            fontFamily: FONT_FAMILY.HEADING,
          },
          headerStyle: {
            height: 100,
            backgroundColor: COLORS.GRAY_600,
          },
          headerRight: () => (
            <AppIconButton style={{ padding: 10 }}>
              <Plus />
            </AppIconButton>
          ),
        }}
      />
      <Slot />
    </>
  );
}
