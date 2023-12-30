import { Slot } from "expo-router";

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

  return (
    <GluestackUIProvider config={config}>
      {fontsLoaded ? <Slot /> : <AppLoader />}
    </GluestackUIProvider>
  );
}
