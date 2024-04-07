import React, { useState, useCallback } from "react";
import { router, useFocusEffect } from "expo-router";
import { FlatList, ScrollView, Text } from "react-native";

import { useProductsContext } from "@/hooks/useProductsContext.hook";

import { AppDropDown } from "@/components/AppDropDown";
import { AppProductCard } from "@/components/AppProductCard";
import { AppEmptyList } from "@/components/AppEmptyList";
import { AppRefreshControl } from "@/components/AppRefreshControl";

import { AppError } from "@/utils/AppError.util";

import { ProductsDTO } from "@/dtos/Products.dto";

import Toast from "react-native-toast-message";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function Announcements() {
  const { COLORS, FONT_FAMILY } = useTheme();

  const { userProducts, getUserProducts, setSelectedProduct } =
    useProductsContext();

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<IProductsFilter>(
    PRODUCTS_FILTER[0]
  );

  const USER_PRODUCTS_QNT = userProducts.length;

  async function fetchData() {
    try {
      setRefreshing(true);

      await getUserProducts();
    } catch (error) {
      console.error("fetchData FAILED: ", error);

      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possível buscar seus anúncios. Tente novamente mais tarde.";

      Toast.show({
        type: "error",
        text1: "Erro!",
        text2: title,
      });
    } finally {
      setRefreshing(false);
    }
  }

  async function handleOpenAnnouncementDetails(item: ProductsDTO) {
    setSelectedProduct((prevState) => (prevState = item));
    router.push("/my_announcement_details/");
  }

  const handleOnRefresh = useCallback(() => {
    fetchData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <S.Container>
      <S.Content>
        {/* TODO: Tentar passar <S.Header /> e seus filhos como "StickyHeaderCompoment" de <ScrollView /> */}
        {/* Isso poderia ser minha solução para o app 'Coffee Delivery' */}
        <S.Header>
          <Text style={{ fontFamily: FONT_FAMILY.BODY }}>
            {USER_PRODUCTS_QNT} anúncios
          </Text>
          <AppDropDown
            style={{
              borderWidth: 1,
              borderColor: COLORS.GRAY_500,
              padding: 5,
              borderRadius: 6,
              width: 150,
            }}
            data={PRODUCTS_FILTER}
            value={selectedFilter}
            labelField="label"
            valueField="value"
            placeholder="Filtros"
            onChange={setSelectedFilter}
          />
        </S.Header>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <AppRefreshControl
              refreshing={refreshing}
              onRefresh={handleOnRefresh}
            />
          }
        >
          <S.Body>
            <FlatList
              data={userProducts}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <S.ProductCardContainer>
                  <AppProductCard
                    item={item}
                    key={item.id}
                    onPress={() => handleOpenAnnouncementDetails(item)}
                  />
                </S.ProductCardContainer>
              )}
              ListEmptyComponent={
                <AppEmptyList
                  title="Nenhum produto encontrado"
                  subtitle="Use o filtro acima para encontrá-los"
                />
              }
              numColumns={2}
              scrollEnabled={false}
            />
          </S.Body>
        </ScrollView>
      </S.Content>
    </S.Container>
  );
}

type IProductsFilter = {
  label: "Todos" | "Ativos" | "Inativos";
  value: "todos" | "ativos" | "inativos";
};

const PRODUCTS_FILTER = [
  { label: "Todos", value: "todos" },
  { label: "Ativos", value: "ativos" },
  { label: "Inativos", value: "inativos" },
] as IProductsFilter[];
