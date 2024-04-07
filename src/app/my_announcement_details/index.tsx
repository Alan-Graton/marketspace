import React from "react";

import { router } from "expo-router";

import { ScrollView } from "react-native";

import { useProductsContext } from "@/hooks/useProductsContext.hook";

import { AnnouncementDetailsRoot } from "@/components/global/AnnouncementDetailsContent/Root";
import { AppButton } from "@/components/AppButton";

import { api } from "@/service/api";

import { AppError } from "@/utils/AppError.util";

import { Power, TrashSimple } from "phosphor-react-native";

import Toast from "react-native-toast-message";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function MyAnnouncementDetails() {
  const { selectedProduct, getProductDetails } = useProductsContext();

  const { COLORS } = useTheme();

  const [loading, setLoading] = React.useState<boolean>(false);

  async function handleProductStatusChange() {
    try {
      setLoading(true);

      await api.patch(`products/${selectedProduct.id}`, {
        is_active: !selectedProduct.is_active,
      });

      await getProductDetails(selectedProduct.id);
    } catch (error) {
      console.error("handleProductStatusChange FAILED: ", error);

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
    <>
      <S.Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AnnouncementDetailsRoot.Content product={selectedProduct}>
            <S.Footer>
              <AppButton
                title={
                  selectedProduct.is_active
                    ? "Ativar anúncio"
                    : "Desativar anúncio"
                }
                type={selectedProduct.is_active ? "primary" : "ternary"}
                icon={<Power size={18} color={COLORS.GRAY_700} />}
                loading={loading}
                onPress={() => handleProductStatusChange()}
              />
              <AppButton
                title="Excluir anúncio"
                type="secondary"
                icon={<TrashSimple size={18} color={COLORS.GRAY_200} />}
              />
            </S.Footer>
          </AnnouncementDetailsRoot.Content>
        </ScrollView>
      </S.Container>
    </>
  );
}
