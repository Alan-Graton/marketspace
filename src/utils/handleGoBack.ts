import { router } from "expo-router";

export function handleGoBack() {
  if (router.canGoBack()) router.back();
}
