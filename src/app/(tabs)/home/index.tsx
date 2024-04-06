import React, { useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";

import { FlatList, ScrollView } from "react-native";

import { useProductsContext } from "@/hooks/useProductsContext.hook";

import { AppProductCard } from "@/components/AppProductCard";
import { AppBottomSheet } from "@/components/AppBottomSheet";
import { AppEmptyList } from "@/components/AppEmptyList";
import { AppRefreshControl } from "@/components/AppRefreshControl";

import { AnnouncementsCounter } from "./components/AnnouncementsCounter";
import { ProductsFilter } from "./components/ProductsFilter";
import { BottomSheetHeader } from "./components/BottomSheetComponents/BottomSheetHeader";
import { BottomSheetBody } from "./components/BottomSheetComponents/BottomSheetBody";
import { BottomSheetFooter } from "./components/BottomSheetComponents/BottomSheetFooter";

import { AppError } from "@/utils/AppError.util";

import Toast from "react-native-toast-message";

import * as S from "./styles";

export default function Home() {
  const {
    products,
    getProducts,
    userProducts,
    getUserProducts,
    setSelectedProduct,
  } = useProductsContext();

  const USER_ACTIVE_PRODUCTS = userProducts.filter(
    (product) => product.is_active
  ).length;

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false);

  async function fetchData() {
    try {
      setRefreshing(true);

      await getProducts();
      await getUserProducts();
    } catch (error) {
      console.error("fetchData FAILED: ", error);

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
      setRefreshing(false);
    }
  }

  const handleOnRefresh = useCallback(() => {
    fetchData();
  }, []);

  useFocusEffect(
    useCallback(() => {
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

      fetchData();
    }, [])
  );

  return (
    <>
      <S.Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <AppRefreshControl
              refreshing={refreshing}
              onRefresh={handleOnRefresh}
            />
          }
        >
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
                      item={item}
                      key={item.id}
                      onPress={() =>
                        setSelectedProduct((prevState) => (prevState = item))
                      }
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
