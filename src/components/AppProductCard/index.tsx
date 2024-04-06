import { TouchableOpacityProps } from "react-native";

import { useProductsContext } from "@/hooks/useProductsContext.hook";

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
  const {} = useProductsContext();

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
      </S.ProductImg>
      <S.Footer>
        <S.Product>{item.name}</S.Product>
        <S.Price>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(Number(item.price))}
        </S.Price>
      </S.Footer>
    </S.Card>
  );
}
