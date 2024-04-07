import { TouchableOpacityProps } from "react-native";

import { formatNumber } from "react-native-currency-input";

import { AppStatusBadge } from "../AppStatusBadge";

import { ProductsDTO } from "@/dtos/Products.dto";
import { api } from "@/service/api";

import avatar from "@/assets/defaultAvatar.png";

import * as S from "./styles";

interface IProps extends TouchableOpacityProps {
  showAvatar?: boolean;
  item: ProductsDTO;
}

export function AppProductCard({ showAvatar = false, item, ...rest }: IProps) {
  return (
    <S.Card {...rest}>
      <S.ProductImg
        source={{
          uri: `${api.defaults.baseURL}/images/${item.product_images[0]?.path}`,
        }}
      >
        <S.Header style={!showAvatar && { justifyContent: "flex-end" }}>
          {showAvatar && <S.Avatar source={avatar} />}
          <AppStatusBadge status={item.is_new} />
        </S.Header>
        {!item.is_active && (
          <S.OverlayContainer>
            <S.OverlayTitle>ANÚNCIO DESATIVADO</S.OverlayTitle>
          </S.OverlayContainer>
        )}
      </S.ProductImg>
      <S.Footer>
        <S.Product is_active={item.is_active}>{item.name}</S.Product>
        <S.Price is_active={item.is_active}>
          R${Number(item.price) / 100.0}
        </S.Price>
      </S.Footer>
    </S.Card>
  );
}
