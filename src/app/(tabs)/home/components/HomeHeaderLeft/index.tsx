import avatar from "@/assets/defaultAvatar.png";

import * as S from "./styles";

export function HomeHeaderLeft() {
  return (
    <>
      <S.Container>
        <S.Avatar source={avatar} />
        <S.GreetingsContainer>
          <S.Greetings>Boas vindas,</S.Greetings>
          <S.Username>Alan!</S.Username>
        </S.GreetingsContainer>
      </S.Container>
    </>
  );
}
