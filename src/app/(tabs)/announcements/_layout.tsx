import React from "react";

import { Slot, Tabs, router } from "expo-router";

import { useAnnouncementContext } from "@/hooks/useAnnouncementContext";

import { AppIconButton } from "@/components/AppIconButton";

import { Plus } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

export default function AnnouncementsLayout() {
  const { COLORS, FONT_FAMILY } = useTheme();

  const { selectedAnnouncement } = useAnnouncementContext();

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
          // TODO: Title and buttons must be dynamic for diff ocasions
          headerRight: () => (
            <AppIconButton
              style={{ padding: 10 }}
              onPress={() => {
                router.push("/announcement_registration/");
              }}
            >
              <Plus />
            </AppIconButton>
          ),
        }}
      />
      <Slot />
    </>
  );
}
