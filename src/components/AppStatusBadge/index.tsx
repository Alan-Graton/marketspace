import { AnnouncementStatus } from "@/@types";

import { ViewProps } from "react-native";

import * as S from "./styles";

interface IProps extends ViewProps {
  status: AnnouncementStatus;
}

export function AppStatusBadge({ status, ...rest }: IProps) {
  return (
    <S.Container status={status} {...rest}>
      <S.Title status={status}>{status}</S.Title>
    </S.Container>
  );
}
