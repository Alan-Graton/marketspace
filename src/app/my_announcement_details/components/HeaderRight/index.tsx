import { router } from "expo-router";

import { AppIconButton } from "@/components/AppIconButton";

import { PencilSimpleLine } from "phosphor-react-native";

export function AnnouncementDetailsHeaderRight() {
  return (
    <AppIconButton
      onPress={() => router.push("/announcement_registration/edit")}
    >
      <PencilSimpleLine />
    </AppIconButton>
  );
}
