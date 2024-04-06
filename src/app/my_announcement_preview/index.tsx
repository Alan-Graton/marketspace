import React from "react";
import { router } from "expo-router";

import { ScrollView } from "react-native";

import { useProductsContext } from "@/hooks/useProductsContext.hook";
import { useAuthContext } from "@/hooks/useAuthContext.hook";

import { AnnouncementDetailsRoot } from "@/components/global/AnnouncementDetailsContent/Root";
import { AppButton } from "@/components/AppButton";

import { AppError } from "@/utils/AppError.util";

import Toast from "react-native-toast-message";

import { ArrowLeft, Tag } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function MyAnnouncementPreview() {
  const { COLORS } = useTheme();

  const { user } = useAuthContext();

  const {
    selectedProduct,
    loading,
    setLoading,
    postProducts,
    postProductImages,
  } = useProductsContext();

  async function submitProductAnnouncement() {
    try {
      setLoading(true);

      const { data } = await postProducts({
        ...selectedProduct,
        price: Number(
          selectedProduct.price
            .toString()
            .replace("R$", "")
            .replaceAll(",", "")
            .replaceAll(".", "")
        ),
      });

      await postProductImages(
        data.id,
        user.name.trim(),
        selectedProduct.product_images
      );

      Toast.show({
        type: "success",
        text1: "Parabéns!",
        text2: "Seu anúncio foi cadastrado com sucesso!",
      });

      router.push("/(tabs)/announcements");
    } catch (error) {
      console.error("submitProductAnnouncement FAILED: ", error);
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possível entrar. Tente novamente mais tarde.";

      Toast.show({
        type: "error",
        text1: "Erro!",
        text2: title,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AnnouncementDetailsRoot.Content product={selectedProduct} />
      </ScrollView>
      <AnnouncementDetailsRoot.Footer>
        <S.Footer>
          <AppButton
            title="Voltar e editar"
            type="secondary"
            style={{ flex: 1 }}
            icon={<ArrowLeft size={16} />}
            onPress={() => router.push("/announcement_registration/edit")}
          />
          <AppButton
            title="Publicar"
            style={{ flex: 1 }}
            icon={<Tag size={16} color={COLORS.GRAY_600} />}
            loading={loading}
            onPress={submitProductAnnouncement}
          />
        </S.Footer>
      </AnnouncementDetailsRoot.Footer>
    </S.Container>
  );
}
