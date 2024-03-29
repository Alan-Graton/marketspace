import { ProductStatus } from "@/@types";

import { ViewProps } from "react-native";

import { XCircle } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

interface IProps extends ViewProps {
  status: ProductStatus;
  hasIcon?: Boolean;
}

/** TODO: Add validação no caso do Badge ter sido selecionado
 */
export function AppStatusBadge({ status, hasIcon = false, ...rest }: IProps) {
  const { COLORS } = useTheme();

  const HANDLE_BADGE_TITLE = {
    0: "USADO",
    1: "NOVO",
  };

  return (
    <S.Container status={status} hasIcon={hasIcon} {...rest}>
      <S.Title status={status} hasIcon={hasIcon}>
        {HANDLE_BADGE_TITLE[status]}
      </S.Title>
      {/* FIXME: Só exibir o icon no caso do badge ter sido selecionado */}
      {hasIcon && <XCircle size={16} color={COLORS.GRAY_600} weight="fill" />}
    </S.Container>
  );
}
