import React from "react";

import { Text, View, ScrollView } from "react-native";

import { useAnnouncementContext } from "@/hooks/useAnnouncementContext";

import { AppStatusBadge } from "@/components/AppStatusBadge";

import { UserDTO } from "@/dtos/User.dto";

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

interface Props {
  user?: UserDTO;
  announcementDetails?: any;
  active?: boolean;
  footer?: React.JSX.Element;
}

/**
 * @deprecated Implementing Compound Component pattern in this component screen
 */
export function AnnouncementDetailsContent({
  user,
  announcementDetails,
  active = false,
  footer,
}: Props) {
  const { COLORS } = useTheme();

  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
    </S.Container>
  );
}
