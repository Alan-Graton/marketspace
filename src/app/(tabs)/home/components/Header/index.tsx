import { HomeHeaderLeft } from "../HomeHeaderLeft";
import { HomeHeaderRight } from "../HomeHeaderRight";

import * as S from "./styles";

export function HomeHeader() {
  return (
    <S.Container>
      <HomeHeaderLeft />
      <HomeHeaderRight />
    </S.Container>
  );
}
