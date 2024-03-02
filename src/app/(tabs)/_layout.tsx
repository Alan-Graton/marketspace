import { router, Tabs } from "expo-router";

import { TouchableOpacity } from "react-native";

import { useAnnouncementContext } from "@/hooks/useAnnouncementContext";

import { House, Tag, SignOut } from "phosphor-react-native";

import { THEME } from "@/theme";

export default function TabsLayout() {
  const { selectedAnnouncement } = useAnnouncementContext();

  function handleSignOut() {
    router.push("/(login)");
  }

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        title: "",
        headerShadowVisible: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 75,
          backgroundColor: THEME.COLORS.GRAY_700,
          elevation: 0,
          borderColor: THEME.COLORS.GRAY_700,
          display: selectedAnnouncement ? "none" : "flex",
        },
        headerStyle: {
          backgroundColor: THEME.COLORS.GRAY_600,
        },
        tabBarActiveTintColor: THEME.COLORS.GRAY_200,
        tabBarInactiveTintColor: THEME.COLORS.GRAY_400,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShadowVisible: false,
          tabBarIcon: ({ size, color, focused }) => (
            <House
              size={size}
              color={color}
              weight={focused ? "bold" : "regular"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="announcements"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Tag
              size={size}
              color={color}
              weight={focused ? "bold" : "regular"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="signout"
        options={{
          tabBarIcon: ({ size }) => (
            <TouchableOpacity onPress={() => handleSignOut()}>
              <SignOut size={size} color={THEME.COLORS.RED_LIGHT} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}
