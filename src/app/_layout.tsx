import "react-native-gesture-handler";

import { Slot } from "expo-router";

import { AnnouncementProvider } from "@/contexts/AnnouncementContext";

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

  return (
    <ThemeProvider theme={THEME}>
      <AnnouncementProvider>{fontsLoaded && <Slot />}</AnnouncementProvider>
      <StatusBar animated translucent />
    </ThemeProvider>
  );
}
