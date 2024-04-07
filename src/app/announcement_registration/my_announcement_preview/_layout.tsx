import React from "react";
import { Slot, Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";

import { Header } from "./Header";

export default function MyAnnouncementPreviewLayout() {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <Slot />
      <StatusBar animated style="light" />
    </>
  );
}
