import React from "react";
import { useGlobalSearchParams } from "expo-router";
import { router } from "expo-router";

import { ScrollView } from "react-native";

import { AnnouncementDetailsRoot } from "@/components/global/AnnouncementDetailsContent/Root";
import { AppButton } from "@/components/AppButton";

import { Power, TrashSimple } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function MyAnnouncementDetails() {
  const { id } = useGlobalSearchParams<{ id: string }>();

  const { COLORS } = useTheme();

  const [deactivateAnnouncement, setDeactivateAnnouncement] =
    React.useState<boolean>(false);

  return (
    <>
      <S.Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AnnouncementDetailsRoot.Content>
            <S.Footer>
              <AppButton
                title={
                  deactivateAnnouncement
                    ? "Ativar anúncio"
                    : "Desativar anúncio"
                }
                type={deactivateAnnouncement ? "primary" : "ternary"}
                icon={<Power size={18} color={COLORS.GRAY_700} />}
                onPress={() =>
                  setDeactivateAnnouncement(!deactivateAnnouncement)
                }
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
