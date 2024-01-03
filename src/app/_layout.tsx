import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { AppLoader } from "@/components/AppLoader";

import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from "@expo-google-fonts/karla";

import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "../../config/gluestack-ui.config";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });

  const AppContent = () => {
    return (
      <>
        <Slot />
        <StatusBar animated backgroundColor="#F7F7F8" translucent />
      </>
    );
  };

  return (
    <GluestackUIProvider config={config}>
      {fontsLoaded ? <AppContent /> : <AppLoader />}
    </GluestackUIProvider>
  );
}
