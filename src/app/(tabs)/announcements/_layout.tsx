import React from "react";

import { Slot, Tabs, router } from "expo-router";

import { useAnnouncementContext } from "@/hooks/useAnnouncementContext";

import { AppIconButton } from "@/components/AppIconButton";

import { Plus } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import { useProductsContext } from "@/hooks/useProductsContext.hook";

export default function AnnouncementsLayout() {
  const { COLORS, FONT_FAMILY } = useTheme();

  const { selectedProduct } = useProductsContext();

  return (
    <>
      <Tabs.Screen
        options={{
          headerShown: !selectedProduct.id ? true : false,
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
            <AppIconButton
              style={{ padding: 10 }}
              onPress={() => {
                router.push("/announcement_registration/new");
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
