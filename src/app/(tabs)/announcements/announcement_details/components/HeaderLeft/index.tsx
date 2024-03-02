import { router } from "expo-router";

import { useAnnouncementContext } from "@/hooks/useAnnouncementContext";

import { AppIconButton } from "@/components/AppIconButton";

import { ArrowLeft } from "phosphor-react-native";

export function AnnouncementDetailsHeaderLeft() {
  const { setSelectedAnnouncement } = useAnnouncementContext();

  function goBack() {
    router.canGoBack() && router.back();
    setSelectedAnnouncement(null);
  }

  return (
    <AppIconButton onPress={goBack}>
      <ArrowLeft />
    </AppIconButton>
  );
}
