import React from "react";

import { Slot, Tabs } from "expo-router";

import { HomeHeader } from "./components/Header";

export default function HomeLayout() {
  return (
    <>
      <Tabs.Screen
        options={{
          headerStyle: {
            height: 100,
          },
          header: () => <HomeHeader />,
        }}
      />
      <Slot />
    </>
  );
}
