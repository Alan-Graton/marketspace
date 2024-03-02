import { TouchableOpacityProps } from "react-native";

import avatar from "@/assets/defaultAvatar.png";
import productPng from "@/assets/product1.png";

import * as S from "./styles";
import { AppStatusBadge } from "../AppStatusBadge";

interface IProps extends TouchableOpacityProps {
  showAvatar?: boolean;
  status: "NOVO" | "USADO";
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
          {/* <S.StatusBadge status={status}>
            <S.StatusText>{status}</S.StatusText>
          </S.StatusBadge> */}
        </S.Header>
      </S.ProductImg>
      <S.Footer>
        <S.Product>Tênis vermelho</S.Product>
        <S.Price>R$ 69,00</S.Price>
      </S.Footer>
    </S.Card>
  );
}
