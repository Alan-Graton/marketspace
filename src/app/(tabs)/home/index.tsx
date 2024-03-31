import React, { useState } from "react";
import { useFocusEffect } from "expo-router";

import { FlatList, ScrollView } from "react-native";

import { useProductsContext } from "@/hooks/useProductsContext.hook";

import { AppProductCard } from "@/components/AppProductCard";
import { AppBottomSheet } from "@/components/AppBottomSheet";
import { AppEmptyList } from "@/components/AppEmptyList";

import { AnnouncementsCounter } from "./components/AnnouncementsCounter";
import { ProductsFilter } from "./components/ProductsFilter";
import { BottomSheetHeader } from "./components/BottomSheetComponents/BottomSheetHeader";
import { BottomSheetBody } from "./components/BottomSheetComponents/BottomSheetBody";
import { BottomSheetFooter } from "./components/BottomSheetComponents/BottomSheetFooter";

import { ProductsDTO } from "@/dtos/Products.dto";

import * as S from "./styles";

export default function Home() {
  const { products, setProducts, getProducts, setSelectedProduct } =
    useProductsContext();

  const USER_ACTIVE_PRODUCTS = products.filter(
    (product) => product.is_active
  ).length;

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      async function fetchData() {
        await getProducts();
      }

      setSelectedProduct({
        id: "",
        images: [],
        name: "",
        description: "",
        is_new: false,
        price: "R$00,00",
        accept_trade: false,
        is_active: false,
        payment_methods: [],
      } as ProductsDTO);

      fetchData();
    }, [])
  );

  return (
    <>
      <S.Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <S.Content>
            <S.Header>
              <AnnouncementsCounter counter={USER_ACTIVE_PRODUCTS} />
            </S.Header>
            <S.Body>
              <ProductsFilter
                bottomSheetVisible={bottomSheetVisible}
                setBottomSheetVisible={setBottomSheetVisible}
              />
              <FlatList
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <S.ProductCardContainer>
                    <AppProductCard
                      showAvatar
                      status={item.is_new}
                      key={item.id}
                    />
                  </S.ProductCardContainer>
                )}
                ListEmptyComponent={
                  <AppEmptyList
                    title="Nenhum produto encontrado"
                    subtitle="Use os filtros acima para encontrá-los"
                  />
                }
                numColumns={2}
                scrollEnabled={false}
              />
            </S.Body>
          </S.Content>
        </ScrollView>
      </S.Container>
      <AppBottomSheet
        isVisible={bottomSheetVisible}
        setIsVisible={setBottomSheetVisible}
        header={<BottomSheetHeader setIsVisible={setBottomSheetVisible} />}
        body={<BottomSheetBody />}
        footer={<BottomSheetFooter />}
      />
    </>
  );
}
