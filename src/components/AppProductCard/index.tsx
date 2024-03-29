import { TouchableOpacityProps } from "react-native";

import { AppStatusBadge } from "../AppStatusBadge";

import avatar from "@/assets/defaultAvatar.png";
import productPng from "@/assets/product1.png";

import { ProductStatus } from "@/@types";

import * as S from "./styles";

interface IProps extends TouchableOpacityProps {
  showAvatar?: boolean;
  status: ProductStatus;
}

export function AppProductCard({
  showAvatar = false,
  status,
  ...rest
}: IProps) {
  return (
    <S.Card {...rest}>
      <S.ProductImg source={productPng}>
        <S.Header style={!showAvatar && { justifyContent: "flex-end" }}>
          {showAvatar && <S.Avatar source={avatar} />}
          <AppStatusBadge status={status} />
        </S.Header>
      </S.ProductImg>
      <S.Footer>
        <S.Product>Tênis vermelho</S.Product>
        <S.Price>R$ 69,00</S.Price>
      </S.Footer>
    </S.Card>
  );
}
