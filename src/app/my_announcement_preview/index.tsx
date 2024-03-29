import React from "react";

import { ScrollView } from "react-native";

import { router } from "expo-router";

import { AnnouncementDetailsRoot } from "@/components/global/AnnouncementDetailsContent/Root";
import { AppButton } from "@/components/AppButton";

import { handleGoBack } from "@/utils/handleGoBack.util";

import { ArrowLeft, Tag } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function MyAnnouncementPreview() {
  const { COLORS } = useTheme();

  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AnnouncementDetailsRoot.Content />
      </ScrollView>
      <AnnouncementDetailsRoot.Footer>
        <S.Footer>
          <AppButton
            title="Voltar e editar"
            type="secondary"
            style={{ flex: 1 }}
            icon={<ArrowLeft size={16} />}
            onPress={handleGoBack}
          />
          <AppButton
            title="Publicar"
            style={{ flex: 1 }}
            icon={<Tag size={16} color={COLORS.GRAY_600} />}
          />
        </S.Footer>
      </AnnouncementDetailsRoot.Footer>
    </S.Container>
  );
}
