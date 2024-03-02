import { AnnouncementStatus } from "@/@types";

import * as S from "./styles";

interface IProps {
  status: AnnouncementStatus;
}

export function AppStatusBadge({ status }: IProps) {
  return (
    <S.Container status={status}>
      <S.Title status={status}>{status}</S.Title>
    </S.Container>
  );
}
