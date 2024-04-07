import { router } from "expo-router";

import { useProductsContext } from "@/hooks/useProductsContext.hook";

import { AppIconButton } from "@/components/AppIconButton";

import { ArrowLeft } from "phosphor-react-native";

export function AnnouncementDetailsHeaderLeft() {
  const { setSelectedProduct } = useProductsContext();

  function goBack() {
    router.canGoBack() && router.back();
    setSelectedProduct({
      id: "",
      product_images: [],
      name: "",
      description: "",
      is_new: false,
      price: "R$00,00",
      accept_trade: false,
      is_active: false,
      payment_methods: [],
    });
  }

  return (
    <AppIconButton onPress={goBack}>
      <ArrowLeft />
    </AppIconButton>
  );
}
