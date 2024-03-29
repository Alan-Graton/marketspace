import React from "react";
import { router, useFocusEffect } from "expo-router";
import { FlatList, ScrollView, Text } from "react-native";

import { useProductsContext } from "@/hooks/useProductsContext.hook";

import { AppDropDown } from "@/components/AppDropDown";
import { AppProductCard } from "@/components/AppProductCard";
import { AppEmptyList } from "@/components/AppEmptyList";

import { ProductsDTO } from "@/dtos/Products.dto";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function Announcements() {
  const { COLORS, FONT_FAMILY } = useTheme();

  const { userProducts, getUserProducts, selectedProduct, setSelectedProduct } =
    useProductsContext();

  const [selectedFilter, setSelectedFilter] = React.useState<IProductsFilter>(
    PRODUCTS_FILTER[0]
  );

  function handleOpenAnnouncementDetails(item: ProductsDTO) {
    console.log("Selected Item: ", item);

    setSelectedProduct(item);

    router.push(`/announcement_details/${item.id}`);
  }

  useFocusEffect(
    React.useCallback(() => {
      async function fetchData() {
        await getUserProducts();
      }

      fetchData();
    }, [])
  );

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <Text style={{ fontFamily: FONT_FAMILY.BODY }}>9 anúncios</Text>
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <S.Body>
            <FlatList
              data={userProducts}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <S.ProductCardContainer>
                  <AppProductCard
                    status={item.is_new}
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
