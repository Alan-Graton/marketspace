import React from "react";
import { router } from "expo-router";
import { FlatList, ScrollView, Text } from "react-native";

import { useAnnouncementContext } from "@/hooks/useAnnouncementContext";

import { AppDropDown } from "@/components/AppDropDown";
import { AppProductCard } from "@/components/AppProductCard";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function Announcements() {
  const { COLORS, FONT_FAMILY } = useTheme();

  const { announcements, selectedAnnouncement, setSelectedAnnouncement } =
    useAnnouncementContext();

  const [selectedFilter, setSelectedFilter] = React.useState<{
    label: string;
    value: string;
  }>({ label: "Todos", value: "todos" });

  function handleOpenAnnouncementDetails(item: any) {
    setSelectedAnnouncement(item);
    router.push("/(tabs)/announcements/announcement_details/1");
  }

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
            data={[
              { label: "Todos", value: "todos" },
              { label: "Ativos", value: "ativos" },
              { label: "Inativos", value: "inativos" },
            ]}
            value={selectedFilter}
            labelField="label"
            valueField="value"
            placeholder="Filtros"
            onFocus={() => {}}
            onBlur={() => {}}
            onChange={() => {}}
          />
        </S.Header>
        <ScrollView showsVerticalScrollIndicator={false}>
          <S.Body>
            <FlatList
              data={announcements}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <S.ProductCardContainer>
                  <AppProductCard
                    status={item.status}
                    key={item.key}
                    onPress={() => handleOpenAnnouncementDetails(item)}
                  />
                </S.ProductCardContainer>
              )}
              numColumns={2}
              scrollEnabled={false}
            />
          </S.Body>
        </ScrollView>
      </S.Content>
    </S.Container>
  );
}
