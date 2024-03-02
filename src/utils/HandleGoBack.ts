import { router } from "expo-router";

export function handleGoBack() {
  router.canGoBack() && router.back();
}
