import React from "react";

import * as S from "./styles";

interface Props {
  title: string;
  subtitle: string;
}

export function AppEmptyList({ title, subtitle }: Props) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}
