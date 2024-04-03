import React from "react";
import { Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";

import { Header } from "./Header";

export default function MyAnnouncementPreviewLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          header: () => <Header />,
        }}
      />
      <StatusBar animated style="light" />
    </>
  );
}
