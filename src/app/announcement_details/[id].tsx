import React from "react";

import { ScrollView } from "react-native";

import { useGlobalSearchParams } from "expo-router";

import { AppButton } from "@/components/AppButton";

import { WhatsappLogo } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";
import { AnnouncementDetailsRoot } from "@/components/global/AnnouncementDetailsContent/Root";

export default function AnnouncementDetails() {
  const { id } = useGlobalSearchParams<{ id: string }>();

  const { COLORS } = useTheme();

  return (
    <>
      <S.Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AnnouncementDetailsRoot.Content />
        </ScrollView>
        <AnnouncementDetailsRoot.Footer>
          <S.Footer>
            <S.DollarSign>
              R$
              <S.ProductPrice>120,00</S.ProductPrice>
            </S.DollarSign>
            <AppButton
              title="Entrar em contato"
              icon={
                <WhatsappLogo size={16} color={COLORS.GRAY_600} weight="fill" />
              }
            />
          </S.Footer>
        </AnnouncementDetailsRoot.Footer>
      </S.Container>
    </>
  );
}
