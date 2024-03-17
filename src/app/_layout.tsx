import "react-native-gesture-handler";

import Toast from "react-native-toast-message";

import { Slot } from "expo-router";

import { AnnouncementProvider } from "@/contexts/Announcement.context";
import { AuthProvider } from "@/contexts/Auth.context";

import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from "@expo-google-fonts/karla";

import { ThemeProvider } from "styled-components/native";
import { THEME } from "@/theme";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });

  function handleAppContent() {
    return <>{}</>;
  }

  return (
    <ThemeProvider theme={THEME}>
      <AuthProvider>
        <AnnouncementProvider>{fontsLoaded && <Slot />}</AnnouncementProvider>
      </AuthProvider>
      <StatusBar animated translucent />
      <Toast />
    </ThemeProvider>
  );
}
