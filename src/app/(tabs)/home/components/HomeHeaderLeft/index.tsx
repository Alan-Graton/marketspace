import React from "react";

import { useAuthContext } from "@/hooks/useAuthContext.hook";

import { handleUserAvatar } from "@/utils/handleUserAvatar.util";

import * as S from "./styles";

export function HomeHeaderLeft() {
  const { user } = useAuthContext();

  return (
    <>
      <S.Container>
        <S.Avatar source={handleUserAvatar(user)} />
        <S.GreetingsContainer>
          <S.Greetings>Boas vindas,</S.Greetings>
          <S.Username>{user.name || "..."}!</S.Username>
        </S.GreetingsContainer>
      </S.Container>
    </>
  );
}
