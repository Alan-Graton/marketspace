import React, { useState } from "react";

import { FlatList, ScrollView } from "react-native";

import { AnnouncementsCounter } from "./components/AnnouncementsCounter";
import { ProductsFilter } from "./components/ProductsFilter";
import { BottomSheetHeader } from "./components/BottomSheetComponents/BottomSheetHeader";
import { BottomSheetBody } from "./components/BottomSheetComponents/BottomSheetBody";
import { BottomSheetFooter } from "./components/BottomSheetComponents/BottomSheetFooter";

import { AppProductCard } from "@/components/AppProductCard";
import { AppBottomSheet } from "@/components/AppBottomSheet";

import * as S from "./styles";

export default function Home() {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const [products, setProducts] = useState<
    Array<{ key: number; item: number; status: "NOVO" | "USADO" }>
  >(
    Array.from({ length: 10 }).map((item, index) => {
      return {
        key: index,
        item: index,
        status: index % 2 === 0 ? "NOVO" : "USADO",
      };
    })
  );

  console.log("Bottom Sheet should be visible? ", bottomSheetVisible);

  return (
    <>
      <S.Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <S.Content>
            <S.Header>
              <AnnouncementsCounter />
            </S.Header>
            <S.Body>
              <ProductsFilter
                bottomSheetVisible={bottomSheetVisible}
                setBottomSheetVisible={setBottomSheetVisible}
              />
              <FlatList
                data={products}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                  <S.ProductCardContainer>
                    <AppProductCard
                      showAvatar
                      status={item.status}
                      key={item.key}
                    />
                  </S.ProductCardContainer>
                )}
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
        header={<BottomSheetHeader />}
        body={<BottomSheetBody />}
        footer={<BottomSheetFooter />}
      />
    </>
  );
}
