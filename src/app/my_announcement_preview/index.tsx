import React from "react";
import { router } from "expo-router";

import { ScrollView } from "react-native";

import { useProductsContext } from "@/hooks/useProductsContext.hook";

import { AnnouncementDetailsRoot } from "@/components/global/AnnouncementDetailsContent/Root";
import { AppButton } from "@/components/AppButton";

import { ArrowLeft, Tag } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function MyAnnouncementPreview() {
  const { COLORS } = useTheme();

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

      const response = await postProducts(selectedProduct);

      console.log("Submition response: ", response);

      await postProductImages(response?.data.id, selectedProduct.images);
    } catch (error) {
      console.error("submitProductAnnouncement FAILED: ", error);
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
