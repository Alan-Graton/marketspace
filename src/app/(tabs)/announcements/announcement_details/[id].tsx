import React from "react";

import { useGlobalSearchParams } from "expo-router";

import { Image, Text, View, ScrollView } from "react-native";

import { useAnnouncementContext } from "@/hooks/useAnnouncementContext";

import { AppButton } from "@/components/AppButton";
import { AppStatusBadge } from "@/components/AppStatusBadge";

import announcement from "@/assets/product1.png";
import avatar from "@/assets/defaultAvatar.png";

import {
  Power,
  TrashSimple,
  Barcode,
  QrCode,
  Bank,
} from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function AnnouncementDetails() {
  const { id } = useGlobalSearchParams<{ id: string }>();
  const { COLORS, FONT_FAMILY } = useTheme();

  const { selectedAnnouncement, setSelectedAnnouncement } =
    useAnnouncementContext();

  const [deactivateAnnouncement, setDeactivateAnnouncement] =
    React.useState(false);

  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Content>
          <S.Header>
            {/* TODO: Images lists */}
            {/* TODO: Should be a ImageBackground? */}
            {/* TODO: Quando o anúncio estiver desativado será necessário um overlay na img do produto */}
            <S.AnnouncementImg source={announcement} resizeMode="stretch" />
          </S.Header>
          <S.Body>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Image source={avatar} style={{ width: 24, height: 24 }} />
              <Text style={{ fontSize: 14, color: COLORS.GRAY_100 }}>
                Alan Graton
              </Text>
            </View>
            <View style={{ marginTop: 25, gap: 8 }}>
              <AppStatusBadge
                status={selectedAnnouncement?.status}
                style={{
                  maxWidth: 70,
                }}
              />
              <View style={{ gap: 8 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 20, fontFamily: FONT_FAMILY.HEADING }}
                  >
                    Tênis vermelho
                  </Text>
                  <View
                    style={{ flexDirection: "row", alignItems: "baseline" }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: FONT_FAMILY.HEADING,
                        color: COLORS.BLUE_LIGHT,
                      }}
                    >
                      R$
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: FONT_FAMILY.HEADING,
                        color: COLORS.BLUE_LIGHT,
                      }}
                    >
                      69,00
                    </Text>
                  </View>
                </View>
                <Text style={{ color: COLORS.GRAY_200 }}>
                  O Tênis Redley Originals Summer em vermelho é uma escolha
                  perfeita para quem busca versatilidade e estilo no dia a dia.
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 24, marginBottom: 24 }}>
              <View style={{ flexDirection: "row", gap: 8 }}>
                <Text
                  style={{
                    fontFamily: FONT_FAMILY.HEADING,
                    fontSize: 14,
                    color: COLORS.GRAY_200,
                  }}
                >
                  Aceita troca?
                </Text>
                <Text style={{ fontSize: 14, color: COLORS.GRAY_200 }}>
                  Não
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontFamily: FONT_FAMILY.HEADING,
                color: COLORS.GRAY_200,
                marginBottom: 8,
              }}
            >
              Meio de pagamento:
            </Text>
            {/* NOTE: Esses detalhes */}
            <View style={{ flexDirection: "row", gap: 8, marginBottom: 4 }}>
              <Barcode size={18} color={COLORS.GRAY_100} />
              <Text style={{ color: COLORS.GRAY_200 }}>Boleto</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 8, marginBottom: 4 }}>
              <QrCode size={18} color={COLORS.GRAY_100} />
              <Text style={{ color: COLORS.GRAY_200 }}>Pix</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Bank size={18} color={COLORS.GRAY_100} />
              <Text style={{ color: COLORS.GRAY_200 }}>Depósito Bancário</Text>
            </View>
          </S.Body>
          <S.Footer>
            {/*
              TODO: Vou precisar alterar a disposição dos botões do Footer,
              além de ter que deixar o Footer fixo.

              Posso cuidar dessas validações de 2 jeitos:
                1. Parâmetros de rota
                2. Context
              Preciso me decidir em como vou fazer isso...
            */}
            <AppButton
              title={
                deactivateAnnouncement ? "Ativar anúncio" : "Desativar anúncio"
              }
              type={deactivateAnnouncement ? "primary" : "ternary"}
              icon={<Power size={18} color={COLORS.GRAY_700} />}
              onPress={() => setDeactivateAnnouncement(!deactivateAnnouncement)}
            />
            <AppButton
              title="Excluir anúncio"
              type="secondary"
              icon={<TrashSimple size={18} color={COLORS.GRAY_200} />}
            />
          </S.Footer>
        </S.Content>
      </ScrollView>
    </S.Container>
  );
}
