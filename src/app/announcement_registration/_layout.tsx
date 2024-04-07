import { Stack, router, useGlobalSearchParams } from "expo-router";

import { AppIconButton } from "@/components/AppIconButton";

import { ArrowLeft } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

export default function AnnouncementRegistrationLayout() {
  const { action } = useGlobalSearchParams<{ action: "new" | "edit" }>();

  const HANDLE_ROUTE_TITLE = {
    new: "Criar anúncio",
    edit: "Editar anúncio",
  };

  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();

  return (
    <>
      <Stack
        screenOptions={{
          title: HANDLE_ROUTE_TITLE[action],
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: FONT_SIZE.lg,
            fontFamily: FONT_FAMILY.HEADING,
          },
          headerStyle: {
            backgroundColor: COLORS.GRAY_600,
          },
          headerLeft: () => (
            <AppIconButton
              style={{ padding: 10 }}
              onPress={() => router.replace("/home/")}
            >
              <ArrowLeft />
            </AppIconButton>
          ),
        }}
      />
      <StatusBar animated style="dark" />
    </>
  );
}
